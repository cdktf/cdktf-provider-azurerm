# `labServiceLab` Submodule <a name="`labServiceLab` Submodule" id="@cdktf/provider-azurerm.labServiceLab"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceLab <a name="LabServiceLab" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab azurerm_lab_service_lab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLab;

LabServiceLab.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .security(LabServiceLabSecurity)
    .title(java.lang.String)
    .virtualMachine(LabServiceLabVirtualMachine)
//  .autoShutdown(LabServiceLabAutoShutdown)
//  .connectionSetting(LabServiceLabConnectionSetting)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labPlanId(java.lang.String)
//  .network(LabServiceLabNetwork)
//  .roster(LabServiceLabRoster)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LabServiceLabTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.autoShutdown">autoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connectionSetting">connectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.labPlanId">labPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.security"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.virtualMachine"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `autoShutdown`<sup>Optional</sup> <a name="autoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.autoShutdown"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `connectionSetting`<sup>Optional</sup> <a name="connectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.connectionSetting"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labPlanId`<sup>Optional</sup> <a name="labPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.labPlanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `roster`<sup>Optional</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.roster"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown">putAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting">putConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster">putRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine">putVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown">resetAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting">resetConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId">resetLabPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster">resetRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoShutdown` <a name="putAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown"></a>

```java
public void putAutoShutdown(LabServiceLabAutoShutdown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `putConnectionSetting` <a name="putConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting"></a>

```java
public void putConnectionSetting(LabServiceLabConnectionSetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork"></a>

```java
public void putNetwork(LabServiceLabNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `putRoster` <a name="putRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster"></a>

```java
public void putRoster(LabServiceLabRoster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `putSecurity` <a name="putSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity"></a>

```java
public void putSecurity(LabServiceLabSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts"></a>

```java
public void putTimeouts(LabServiceLabTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `putVirtualMachine` <a name="putVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine"></a>

```java
public void putVirtualMachine(LabServiceLabVirtualMachine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `resetAutoShutdown` <a name="resetAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown"></a>

```java
public void resetAutoShutdown()
```

##### `resetConnectionSetting` <a name="resetConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting"></a>

```java
public void resetConnectionSetting()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId"></a>

```java
public void resetId()
```

##### `resetLabPlanId` <a name="resetLabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId"></a>

```java
public void resetLabPlanId()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetRoster` <a name="resetRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster"></a>

```java
public void resetRoster()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLab;

LabServiceLab.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLab;

LabServiceLab.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLab;

LabServiceLab.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLab;

LabServiceLab.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LabServiceLab.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LabServiceLab to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LabServiceLab that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LabServiceLab to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown">autoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting">connectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput">autoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput">connectionSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput">labPlanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput">rosterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput">securityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput">virtualMachineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId">labPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoShutdown`<sup>Required</sup> <a name="autoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown"></a>

```java
public LabServiceLabAutoShutdownOutputReference getAutoShutdown();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a>

---

##### `connectionSetting`<sup>Required</sup> <a name="connectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting"></a>

```java
public LabServiceLabConnectionSettingOutputReference getConnectionSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network"></a>

```java
public LabServiceLabNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a>

---

##### `roster`<sup>Required</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster"></a>

```java
public LabServiceLabRosterOutputReference getRoster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security"></a>

```java
public LabServiceLabSecurityOutputReference getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts"></a>

```java
public LabServiceLabTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a>

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine"></a>

```java
public LabServiceLabVirtualMachineOutputReference getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a>

---

##### `autoShutdownInput`<sup>Optional</sup> <a name="autoShutdownInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput"></a>

```java
public LabServiceLabAutoShutdown getAutoShutdownInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `connectionSettingInput`<sup>Optional</sup> <a name="connectionSettingInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput"></a>

```java
public LabServiceLabConnectionSetting getConnectionSettingInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labPlanIdInput`<sup>Optional</sup> <a name="labPlanIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput"></a>

```java
public java.lang.String getLabPlanIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput"></a>

```java
public LabServiceLabNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `rosterInput`<sup>Optional</sup> <a name="rosterInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput"></a>

```java
public LabServiceLabRoster getRosterInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput"></a>

```java
public LabServiceLabSecurity getSecurityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineInput`<sup>Optional</sup> <a name="virtualMachineInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput"></a>

```java
public LabServiceLabVirtualMachine getVirtualMachineInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labPlanId`<sup>Required</sup> <a name="labPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId"></a>

```java
public java.lang.String getLabPlanId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceLabAutoShutdown <a name="LabServiceLabAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabAutoShutdown;

LabServiceLabAutoShutdown.builder()
//  .disconnectDelay(java.lang.String)
//  .idleDelay(java.lang.String)
//  .noConnectDelay(java.lang.String)
//  .shutdownOnIdle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay">disconnectDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay">idleDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay">noConnectDelay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}. |

---

##### `disconnectDelay`<sup>Optional</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay"></a>

```java
public java.lang.String getDisconnectDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

##### `idleDelay`<sup>Optional</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay"></a>

```java
public java.lang.String getIdleDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

##### `noConnectDelay`<sup>Optional</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay"></a>

```java
public java.lang.String getNoConnectDelay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

##### `shutdownOnIdle`<sup>Optional</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle"></a>

```java
public java.lang.String getShutdownOnIdle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

### LabServiceLabConfig <a name="LabServiceLabConfig" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabConfig;

LabServiceLabConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .security(LabServiceLabSecurity)
    .title(java.lang.String)
    .virtualMachine(LabServiceLabVirtualMachine)
//  .autoShutdown(LabServiceLabAutoShutdown)
//  .connectionSetting(LabServiceLabConnectionSetting)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labPlanId(java.lang.String)
//  .network(LabServiceLabNetwork)
//  .roster(LabServiceLabRoster)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LabServiceLabTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security">security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine">virtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown">autoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting">connectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId">labPlanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster">roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security"></a>

```java
public LabServiceLabSecurity getSecurity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `virtualMachine`<sup>Required</sup> <a name="virtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine"></a>

```java
public LabServiceLabVirtualMachine getVirtualMachine();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `autoShutdown`<sup>Optional</sup> <a name="autoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown"></a>

```java
public LabServiceLabAutoShutdown getAutoShutdown();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `connectionSetting`<sup>Optional</sup> <a name="connectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting"></a>

```java
public LabServiceLabConnectionSetting getConnectionSetting();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labPlanId`<sup>Optional</sup> <a name="labPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId"></a>

```java
public java.lang.String getLabPlanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network"></a>

```java
public LabServiceLabNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `roster`<sup>Optional</sup> <a name="roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster"></a>

```java
public LabServiceLabRoster getRoster();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts"></a>

```java
public LabServiceLabTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

### LabServiceLabConnectionSetting <a name="LabServiceLabConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabConnectionSetting;

LabServiceLabConnectionSetting.builder()
//  .clientRdpAccess(java.lang.String)
//  .clientSshAccess(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess">clientRdpAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess">clientSshAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}. |

---

##### `clientRdpAccess`<sup>Optional</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess"></a>

```java
public java.lang.String getClientRdpAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

##### `clientSshAccess`<sup>Optional</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess"></a>

```java
public java.lang.String getClientSshAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

### LabServiceLabNetwork <a name="LabServiceLabNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabNetwork;

LabServiceLabNetwork.builder()
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}. |

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

### LabServiceLabRoster <a name="LabServiceLabRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabRoster;

LabServiceLabRoster.builder()
//  .activeDirectoryGroupId(java.lang.String)
//  .lmsInstance(java.lang.String)
//  .ltiClientId(java.lang.String)
//  .ltiContextId(java.lang.String)
//  .ltiRosterEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId">activeDirectoryGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance">lmsInstance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId">ltiClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId">ltiContextId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint">ltiRosterEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}. |

---

##### `activeDirectoryGroupId`<sup>Optional</sup> <a name="activeDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId"></a>

```java
public java.lang.String getActiveDirectoryGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

##### `lmsInstance`<sup>Optional</sup> <a name="lmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance"></a>

```java
public java.lang.String getLmsInstance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

##### `ltiClientId`<sup>Optional</sup> <a name="ltiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId"></a>

```java
public java.lang.String getLtiClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

##### `ltiContextId`<sup>Optional</sup> <a name="ltiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId"></a>

```java
public java.lang.String getLtiContextId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

##### `ltiRosterEndpoint`<sup>Optional</sup> <a name="ltiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint"></a>

```java
public java.lang.String getLtiRosterEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

### LabServiceLabSecurity <a name="LabServiceLabSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabSecurity;

LabServiceLabSecurity.builder()
    .openAccessEnabled(java.lang.Boolean)
    .openAccessEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled">openAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}. |

---

##### `openAccessEnabled`<sup>Required</sup> <a name="openAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled"></a>

```java
public java.lang.Object getOpenAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

### LabServiceLabTimeouts <a name="LabServiceLabTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabTimeouts;

LabServiceLabTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#create LabServiceLab#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#read LabServiceLab#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#update LabServiceLab#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

### LabServiceLabVirtualMachine <a name="LabServiceLabVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachine;

LabServiceLabVirtualMachine.builder()
    .adminUser(LabServiceLabVirtualMachineAdminUser)
    .imageReference(LabServiceLabVirtualMachineImageReference)
    .sku(LabServiceLabVirtualMachineSku)
//  .additionalCapabilityGpuDriversInstalled(java.lang.Boolean)
//  .additionalCapabilityGpuDriversInstalled(IResolvable)
//  .createOption(java.lang.String)
//  .nonAdminUser(LabServiceLabVirtualMachineNonAdminUser)
//  .sharedPasswordEnabled(java.lang.Boolean)
//  .sharedPasswordEnabled(IResolvable)
//  .usageQuota(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser">adminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference">imageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled">additionalCapabilityGpuDriversInstalled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption">createOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser">nonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | non_admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled">sharedPasswordEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota">usageQuota</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}. |

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser"></a>

```java
public LabServiceLabVirtualMachineAdminUser getAdminUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

##### `imageReference`<sup>Required</sup> <a name="imageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference"></a>

```java
public LabServiceLabVirtualMachineImageReference getImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku"></a>

```java
public LabServiceLabVirtualMachineSku getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

##### `additionalCapabilityGpuDriversInstalled`<sup>Optional</sup> <a name="additionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled"></a>

```java
public java.lang.Object getAdditionalCapabilityGpuDriversInstalled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

##### `createOption`<sup>Optional</sup> <a name="createOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

##### `nonAdminUser`<sup>Optional</sup> <a name="nonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser"></a>

```java
public LabServiceLabVirtualMachineNonAdminUser getNonAdminUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

##### `sharedPasswordEnabled`<sup>Optional</sup> <a name="sharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled"></a>

```java
public java.lang.Object getSharedPasswordEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

##### `usageQuota`<sup>Optional</sup> <a name="usageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota"></a>

```java
public java.lang.String getUsageQuota();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

### LabServiceLabVirtualMachineAdminUser <a name="LabServiceLabVirtualMachineAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineAdminUser;

LabServiceLabVirtualMachineAdminUser.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineImageReference <a name="LabServiceLabVirtualMachineImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineImageReference;

LabServiceLabVirtualMachineImageReference.builder()
//  .id(java.lang.String)
//  .offer(java.lang.String)
//  .publisher(java.lang.String)
//  .sku(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#version LabServiceLab#version}. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

### LabServiceLabVirtualMachineNonAdminUser <a name="LabServiceLabVirtualMachineNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineNonAdminUser;

LabServiceLabVirtualMachineNonAdminUser.builder()
    .password(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineSku <a name="LabServiceLabVirtualMachineSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineSku;

LabServiceLabVirtualMachineSku.builder()
    .capacity(java.lang.Number)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceLabAutoShutdownOutputReference <a name="LabServiceLabAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabAutoShutdownOutputReference;

new LabServiceLabAutoShutdownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay">resetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay">resetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay">resetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle">resetShutdownOnIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectDelay` <a name="resetDisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay"></a>

```java
public void resetDisconnectDelay()
```

##### `resetIdleDelay` <a name="resetIdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay"></a>

```java
public void resetIdleDelay()
```

##### `resetNoConnectDelay` <a name="resetNoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay"></a>

```java
public void resetNoConnectDelay()
```

##### `resetShutdownOnIdle` <a name="resetShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```java
public void resetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput">disconnectDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput">idleDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput">noConnectDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput">shutdownOnIdleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay">disconnectDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay">idleDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay">noConnectDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle">shutdownOnIdle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disconnectDelayInput`<sup>Optional</sup> <a name="disconnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```java
public java.lang.String getDisconnectDelayInput();
```

- *Type:* java.lang.String

---

##### `idleDelayInput`<sup>Optional</sup> <a name="idleDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput"></a>

```java
public java.lang.String getIdleDelayInput();
```

- *Type:* java.lang.String

---

##### `noConnectDelayInput`<sup>Optional</sup> <a name="noConnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```java
public java.lang.String getNoConnectDelayInput();
```

- *Type:* java.lang.String

---

##### `shutdownOnIdleInput`<sup>Optional</sup> <a name="shutdownOnIdleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```java
public java.lang.String getShutdownOnIdleInput();
```

- *Type:* java.lang.String

---

##### `disconnectDelay`<sup>Required</sup> <a name="disconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay"></a>

```java
public java.lang.String getDisconnectDelay();
```

- *Type:* java.lang.String

---

##### `idleDelay`<sup>Required</sup> <a name="idleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay"></a>

```java
public java.lang.String getIdleDelay();
```

- *Type:* java.lang.String

---

##### `noConnectDelay`<sup>Required</sup> <a name="noConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay"></a>

```java
public java.lang.String getNoConnectDelay();
```

- *Type:* java.lang.String

---

##### `shutdownOnIdle`<sup>Required</sup> <a name="shutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```java
public java.lang.String getShutdownOnIdle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue"></a>

```java
public LabServiceLabAutoShutdown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---


### LabServiceLabConnectionSettingOutputReference <a name="LabServiceLabConnectionSettingOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabConnectionSettingOutputReference;

new LabServiceLabConnectionSettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess">resetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess">resetClientSshAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientRdpAccess` <a name="resetClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess"></a>

```java
public void resetClientRdpAccess()
```

##### `resetClientSshAccess` <a name="resetClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess"></a>

```java
public void resetClientSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput">clientRdpAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput">clientSshAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess">clientRdpAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess">clientSshAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientRdpAccessInput`<sup>Optional</sup> <a name="clientRdpAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput"></a>

```java
public java.lang.String getClientRdpAccessInput();
```

- *Type:* java.lang.String

---

##### `clientSshAccessInput`<sup>Optional</sup> <a name="clientSshAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput"></a>

```java
public java.lang.String getClientSshAccessInput();
```

- *Type:* java.lang.String

---

##### `clientRdpAccess`<sup>Required</sup> <a name="clientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess"></a>

```java
public java.lang.String getClientRdpAccess();
```

- *Type:* java.lang.String

---

##### `clientSshAccess`<sup>Required</sup> <a name="clientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess"></a>

```java
public java.lang.String getClientSshAccess();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue"></a>

```java
public LabServiceLabConnectionSetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---


### LabServiceLabNetworkOutputReference <a name="LabServiceLabNetworkOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabNetworkOutputReference;

new LabServiceLabNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId">publicIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `publicIpId`<sup>Required</sup> <a name="publicIpId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId"></a>

```java
public java.lang.String getPublicIpId();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue"></a>

```java
public LabServiceLabNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---


### LabServiceLabRosterOutputReference <a name="LabServiceLabRosterOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabRosterOutputReference;

new LabServiceLabRosterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId">resetActiveDirectoryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance">resetLmsInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId">resetLtiClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId">resetLtiContextId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint">resetLtiRosterEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryGroupId` <a name="resetActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId"></a>

```java
public void resetActiveDirectoryGroupId()
```

##### `resetLmsInstance` <a name="resetLmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance"></a>

```java
public void resetLmsInstance()
```

##### `resetLtiClientId` <a name="resetLtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId"></a>

```java
public void resetLtiClientId()
```

##### `resetLtiContextId` <a name="resetLtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId"></a>

```java
public void resetLtiContextId()
```

##### `resetLtiRosterEndpoint` <a name="resetLtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint"></a>

```java
public void resetLtiRosterEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput">activeDirectoryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput">lmsInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput">ltiClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput">ltiContextIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput">ltiRosterEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId">activeDirectoryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance">lmsInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId">ltiClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId">ltiContextId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint">ltiRosterEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeDirectoryGroupIdInput`<sup>Optional</sup> <a name="activeDirectoryGroupIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput"></a>

```java
public java.lang.String getActiveDirectoryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `lmsInstanceInput`<sup>Optional</sup> <a name="lmsInstanceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput"></a>

```java
public java.lang.String getLmsInstanceInput();
```

- *Type:* java.lang.String

---

##### `ltiClientIdInput`<sup>Optional</sup> <a name="ltiClientIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput"></a>

```java
public java.lang.String getLtiClientIdInput();
```

- *Type:* java.lang.String

---

##### `ltiContextIdInput`<sup>Optional</sup> <a name="ltiContextIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput"></a>

```java
public java.lang.String getLtiContextIdInput();
```

- *Type:* java.lang.String

---

##### `ltiRosterEndpointInput`<sup>Optional</sup> <a name="ltiRosterEndpointInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput"></a>

```java
public java.lang.String getLtiRosterEndpointInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryGroupId`<sup>Required</sup> <a name="activeDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId"></a>

```java
public java.lang.String getActiveDirectoryGroupId();
```

- *Type:* java.lang.String

---

##### `lmsInstance`<sup>Required</sup> <a name="lmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance"></a>

```java
public java.lang.String getLmsInstance();
```

- *Type:* java.lang.String

---

##### `ltiClientId`<sup>Required</sup> <a name="ltiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId"></a>

```java
public java.lang.String getLtiClientId();
```

- *Type:* java.lang.String

---

##### `ltiContextId`<sup>Required</sup> <a name="ltiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId"></a>

```java
public java.lang.String getLtiContextId();
```

- *Type:* java.lang.String

---

##### `ltiRosterEndpoint`<sup>Required</sup> <a name="ltiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint"></a>

```java
public java.lang.String getLtiRosterEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue"></a>

```java
public LabServiceLabRoster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---


### LabServiceLabSecurityOutputReference <a name="LabServiceLabSecurityOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabSecurityOutputReference;

new LabServiceLabSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode">registrationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput">openAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled">openAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode"></a>

```java
public java.lang.String getRegistrationCode();
```

- *Type:* java.lang.String

---

##### `openAccessEnabledInput`<sup>Optional</sup> <a name="openAccessEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput"></a>

```java
public java.lang.Object getOpenAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `openAccessEnabled`<sup>Required</sup> <a name="openAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled"></a>

```java
public java.lang.Object getOpenAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue"></a>

```java
public LabServiceLabSecurity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---


### LabServiceLabTimeoutsOutputReference <a name="LabServiceLabTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabTimeoutsOutputReference;

new LabServiceLabTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---


### LabServiceLabVirtualMachineAdminUserOutputReference <a name="LabServiceLabVirtualMachineAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineAdminUserOutputReference;

new LabServiceLabVirtualMachineAdminUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue"></a>

```java
public LabServiceLabVirtualMachineAdminUser getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---


### LabServiceLabVirtualMachineImageReferenceOutputReference <a name="LabServiceLabVirtualMachineImageReferenceOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineImageReferenceOutputReference;

new LabServiceLabVirtualMachineImageReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer"></a>

```java
public void resetOffer()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku"></a>

```java
public void resetSku()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue"></a>

```java
public LabServiceLabVirtualMachineImageReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---


### LabServiceLabVirtualMachineNonAdminUserOutputReference <a name="LabServiceLabVirtualMachineNonAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineNonAdminUserOutputReference;

new LabServiceLabVirtualMachineNonAdminUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue"></a>

```java
public LabServiceLabVirtualMachineNonAdminUser getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---


### LabServiceLabVirtualMachineOutputReference <a name="LabServiceLabVirtualMachineOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineOutputReference;

new LabServiceLabVirtualMachineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser">putAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference">putImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser">putNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled">resetAdditionalCapabilityGpuDriversInstalled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption">resetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser">resetNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled">resetSharedPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota">resetUsageQuota</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminUser` <a name="putAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser"></a>

```java
public void putAdminUser(LabServiceLabVirtualMachineAdminUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `putImageReference` <a name="putImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference"></a>

```java
public void putImageReference(LabServiceLabVirtualMachineImageReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `putNonAdminUser` <a name="putNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser"></a>

```java
public void putNonAdminUser(LabServiceLabVirtualMachineNonAdminUser value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `putSku` <a name="putSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku"></a>

```java
public void putSku(LabServiceLabVirtualMachineSku value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `resetAdditionalCapabilityGpuDriversInstalled` <a name="resetAdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled"></a>

```java
public void resetAdditionalCapabilityGpuDriversInstalled()
```

##### `resetCreateOption` <a name="resetCreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption"></a>

```java
public void resetCreateOption()
```

##### `resetNonAdminUser` <a name="resetNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser"></a>

```java
public void resetNonAdminUser()
```

##### `resetSharedPasswordEnabled` <a name="resetSharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled"></a>

```java
public void resetSharedPasswordEnabled()
```

##### `resetUsageQuota` <a name="resetUsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota"></a>

```java
public void resetUsageQuota()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser">adminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference">imageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser">nonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput">additionalCapabilityGpuDriversInstalledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput">adminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput">createOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput">imageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput">nonAdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput">sharedPasswordEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput">skuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput">usageQuotaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled">additionalCapabilityGpuDriversInstalled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption">createOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled">sharedPasswordEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota">usageQuota</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminUser`<sup>Required</sup> <a name="adminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser"></a>

```java
public LabServiceLabVirtualMachineAdminUserOutputReference getAdminUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a>

---

##### `imageReference`<sup>Required</sup> <a name="imageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference"></a>

```java
public LabServiceLabVirtualMachineImageReferenceOutputReference getImageReference();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a>

---

##### `nonAdminUser`<sup>Required</sup> <a name="nonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser"></a>

```java
public LabServiceLabVirtualMachineNonAdminUserOutputReference getNonAdminUser();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a>

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku"></a>

```java
public LabServiceLabVirtualMachineSkuOutputReference getSku();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a>

---

##### `additionalCapabilityGpuDriversInstalledInput`<sup>Optional</sup> <a name="additionalCapabilityGpuDriversInstalledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput"></a>

```java
public java.lang.Object getAdditionalCapabilityGpuDriversInstalledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminUserInput`<sup>Optional</sup> <a name="adminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput"></a>

```java
public LabServiceLabVirtualMachineAdminUser getAdminUserInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `createOptionInput`<sup>Optional</sup> <a name="createOptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput"></a>

```java
public java.lang.String getCreateOptionInput();
```

- *Type:* java.lang.String

---

##### `imageReferenceInput`<sup>Optional</sup> <a name="imageReferenceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput"></a>

```java
public LabServiceLabVirtualMachineImageReference getImageReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `nonAdminUserInput`<sup>Optional</sup> <a name="nonAdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput"></a>

```java
public LabServiceLabVirtualMachineNonAdminUser getNonAdminUserInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `sharedPasswordEnabledInput`<sup>Optional</sup> <a name="sharedPasswordEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput"></a>

```java
public java.lang.Object getSharedPasswordEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput"></a>

```java
public LabServiceLabVirtualMachineSku getSkuInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `usageQuotaInput`<sup>Optional</sup> <a name="usageQuotaInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput"></a>

```java
public java.lang.String getUsageQuotaInput();
```

- *Type:* java.lang.String

---

##### `additionalCapabilityGpuDriversInstalled`<sup>Required</sup> <a name="additionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled"></a>

```java
public java.lang.Object getAdditionalCapabilityGpuDriversInstalled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createOption`<sup>Required</sup> <a name="createOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption"></a>

```java
public java.lang.String getCreateOption();
```

- *Type:* java.lang.String

---

##### `sharedPasswordEnabled`<sup>Required</sup> <a name="sharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled"></a>

```java
public java.lang.Object getSharedPasswordEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usageQuota`<sup>Required</sup> <a name="usageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota"></a>

```java
public java.lang.String getUsageQuota();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue"></a>

```java
public LabServiceLabVirtualMachine getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---


### LabServiceLabVirtualMachineSkuOutputReference <a name="LabServiceLabVirtualMachineSkuOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.lab_service_lab.LabServiceLabVirtualMachineSkuOutputReference;

new LabServiceLabVirtualMachineSkuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue"></a>

```java
public LabServiceLabVirtualMachineSku getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---



