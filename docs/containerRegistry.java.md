# `containerRegistry` Submodule <a name="`containerRegistry` Submodule" id="@cdktf/provider-azurerm.containerRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistry <a name="ContainerRegistry" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry azurerm_container_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistry;

ContainerRegistry.Builder.create(Construct scope, java.lang.String id)
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
    .sku(java.lang.String)
//  .adminEnabled(java.lang.Boolean)
//  .adminEnabled(IResolvable)
//  .anonymousPullEnabled(java.lang.Boolean)
//  .anonymousPullEnabled(IResolvable)
//  .dataEndpointEnabled(java.lang.Boolean)
//  .dataEndpointEnabled(IResolvable)
//  .encryption(IResolvable)
//  .encryption(java.util.List<ContainerRegistryEncryption>)
//  .exportPolicyEnabled(java.lang.Boolean)
//  .exportPolicyEnabled(IResolvable)
//  .georeplications(IResolvable)
//  .georeplications(java.util.List<ContainerRegistryGeoreplications>)
//  .id(java.lang.String)
//  .identity(ContainerRegistryIdentity)
//  .networkRuleBypassOption(java.lang.String)
//  .networkRuleSet(IResolvable)
//  .networkRuleSet(java.util.List<ContainerRegistryNetworkRuleSet>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .quarantinePolicyEnabled(java.lang.Boolean)
//  .quarantinePolicyEnabled(IResolvable)
//  .retentionPolicyInDays(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerRegistryTimeouts)
//  .trustPolicyEnabled(java.lang.Boolean)
//  .trustPolicyEnabled(IResolvable)
//  .zoneRedundancyEnabled(java.lang.Boolean)
//  .zoneRedundancyEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#sku ContainerRegistry#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.anonymousPullEnabled">anonymousPullEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.dataEndpointEnabled">dataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.encryption">encryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.exportPolicyEnabled">exportPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.georeplications">georeplications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>></code> | georeplications block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.networkRuleSet">networkRuleSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.quarantinePolicyEnabled">quarantinePolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.retentionPolicyInDays">retentionPolicyInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.trustPolicyEnabled">trustPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#trust_policy_enabled ContainerRegistry#trust_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#sku ContainerRegistry#sku}.

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.adminEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}.

---

##### `anonymousPullEnabled`<sup>Optional</sup> <a name="anonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.anonymousPullEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}.

---

##### `dataEndpointEnabled`<sup>Optional</sup> <a name="dataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.dataEndpointEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.encryption"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}.

---

##### `exportPolicyEnabled`<sup>Optional</sup> <a name="exportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.exportPolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}.

---

##### `georeplications`<sup>Optional</sup> <a name="georeplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.georeplications"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>>

georeplications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#georeplications ContainerRegistry#georeplications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity ContainerRegistry#identity}

---

##### `networkRuleBypassOption`<sup>Optional</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.networkRuleBypassOption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}.

---

##### `networkRuleSet`<sup>Optional</sup> <a name="networkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.networkRuleSet"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}.

---

##### `quarantinePolicyEnabled`<sup>Optional</sup> <a name="quarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.quarantinePolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}.

---

##### `retentionPolicyInDays`<sup>Optional</sup> <a name="retentionPolicyInDays" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.retentionPolicyInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

##### `trustPolicyEnabled`<sup>Optional</sup> <a name="trustPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.trustPolicyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#trust_policy_enabled ContainerRegistry#trust_policy_enabled}.

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.Initializer.parameter.zoneRedundancyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications">putGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet">putNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled">resetAnonymousPullEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled">resetDataEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled">resetExportPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications">resetGeoreplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption">resetNetworkRuleBypassOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet">resetNetworkRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled">resetQuarantinePolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicyInDays">resetRetentionPolicyInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTrustPolicyEnabled">resetTrustPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled">resetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption"></a>

```java
public void putEncryption(IResolvable OR java.util.List<ContainerRegistryEncryption> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putEncryption.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>>

---

##### `putGeoreplications` <a name="putGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications"></a>

```java
public void putGeoreplications(IResolvable OR java.util.List<ContainerRegistryGeoreplications> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putGeoreplications.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity"></a>

```java
public void putIdentity(ContainerRegistryIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `putNetworkRuleSet` <a name="putNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet"></a>

```java
public void putNetworkRuleSet(IResolvable OR java.util.List<ContainerRegistryNetworkRuleSet> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putNetworkRuleSet.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts"></a>

```java
public void putTimeouts(ContainerRegistryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetAnonymousPullEnabled` <a name="resetAnonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetAnonymousPullEnabled"></a>

```java
public void resetAnonymousPullEnabled()
```

##### `resetDataEndpointEnabled` <a name="resetDataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetDataEndpointEnabled"></a>

```java
public void resetDataEndpointEnabled()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetExportPolicyEnabled` <a name="resetExportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetExportPolicyEnabled"></a>

```java
public void resetExportPolicyEnabled()
```

##### `resetGeoreplications` <a name="resetGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetGeoreplications"></a>

```java
public void resetGeoreplications()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetNetworkRuleBypassOption` <a name="resetNetworkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleBypassOption"></a>

```java
public void resetNetworkRuleBypassOption()
```

##### `resetNetworkRuleSet` <a name="resetNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetNetworkRuleSet"></a>

```java
public void resetNetworkRuleSet()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetQuarantinePolicyEnabled` <a name="resetQuarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetQuarantinePolicyEnabled"></a>

```java
public void resetQuarantinePolicyEnabled()
```

##### `resetRetentionPolicyInDays` <a name="resetRetentionPolicyInDays" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetRetentionPolicyInDays"></a>

```java
public void resetRetentionPolicyInDays()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrustPolicyEnabled` <a name="resetTrustPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetTrustPolicyEnabled"></a>

```java
public void resetTrustPolicyEnabled()
```

##### `resetZoneRedundancyEnabled` <a name="resetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.resetZoneRedundancyEnabled"></a>

```java
public void resetZoneRedundancyEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistry;

ContainerRegistry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistry;

ContainerRegistry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistry;

ContainerRegistry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistry;

ContainerRegistry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerRegistry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointHostNames">dataEndpointHostNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications">georeplications</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer">loginServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet">networkRuleSet</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput">anonymousPullEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput">dataEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput">encryptionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput">exportPolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput">georeplicationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput">networkRuleBypassOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput">networkRuleSetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput">quarantinePolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDaysInput">retentionPolicyInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyEnabledInput">trustPolicyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput">zoneRedundancyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled">anonymousPullEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled">dataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled">exportPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled">quarantinePolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDays">retentionPolicyInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyEnabled">trustPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `dataEndpointHostNames`<sup>Required</sup> <a name="dataEndpointHostNames" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointHostNames"></a>

```java
public java.util.List<java.lang.String> getDataEndpointHostNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryption"></a>

```java
public ContainerRegistryEncryptionList getEncryption();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList">ContainerRegistryEncryptionList</a>

---

##### `georeplications`<sup>Required</sup> <a name="georeplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplications"></a>

```java
public ContainerRegistryGeoreplicationsList getGeoreplications();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList">ContainerRegistryGeoreplicationsList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identity"></a>

```java
public ContainerRegistryIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference">ContainerRegistryIdentityOutputReference</a>

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.loginServer"></a>

```java
public java.lang.String getLoginServer();
```

- *Type:* java.lang.String

---

##### `networkRuleSet`<sup>Required</sup> <a name="networkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSet"></a>

```java
public ContainerRegistryNetworkRuleSetList getNetworkRuleSet();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList">ContainerRegistryNetworkRuleSetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeouts"></a>

```java
public ContainerRegistryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference">ContainerRegistryTimeoutsOutputReference</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabledInput"></a>

```java
public java.lang.Object getAdminEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousPullEnabledInput`<sup>Optional</sup> <a name="anonymousPullEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabledInput"></a>

```java
public java.lang.Object getAnonymousPullEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEndpointEnabledInput`<sup>Optional</sup> <a name="dataEndpointEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabledInput"></a>

```java
public java.lang.Object getDataEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.encryptionInput"></a>

```java
public java.lang.Object getEncryptionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>>

---

##### `exportPolicyEnabledInput`<sup>Optional</sup> <a name="exportPolicyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabledInput"></a>

```java
public java.lang.Object getExportPolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `georeplicationsInput`<sup>Optional</sup> <a name="georeplicationsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.georeplicationsInput"></a>

```java
public java.lang.Object getGeoreplicationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.identityInput"></a>

```java
public ContainerRegistryIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkRuleBypassOptionInput`<sup>Optional</sup> <a name="networkRuleBypassOptionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOptionInput"></a>

```java
public java.lang.String getNetworkRuleBypassOptionInput();
```

- *Type:* java.lang.String

---

##### `networkRuleSetInput`<sup>Optional</sup> <a name="networkRuleSetInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleSetInput"></a>

```java
public java.lang.Object getNetworkRuleSetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>>

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quarantinePolicyEnabledInput`<sup>Optional</sup> <a name="quarantinePolicyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabledInput"></a>

```java
public java.lang.Object getQuarantinePolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInDaysInput`<sup>Optional</sup> <a name="retentionPolicyInDaysInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDaysInput"></a>

```java
public java.lang.Number getRetentionPolicyInDaysInput();
```

- *Type:* java.lang.Number

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---

##### `trustPolicyEnabledInput`<sup>Optional</sup> <a name="trustPolicyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyEnabledInput"></a>

```java
public java.lang.Object getTrustPolicyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneRedundancyEnabledInput`<sup>Optional</sup> <a name="zoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabledInput"></a>

```java
public java.lang.Object getZoneRedundancyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `anonymousPullEnabled`<sup>Required</sup> <a name="anonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.anonymousPullEnabled"></a>

```java
public java.lang.Object getAnonymousPullEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEndpointEnabled`<sup>Required</sup> <a name="dataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.dataEndpointEnabled"></a>

```java
public java.lang.Object getDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportPolicyEnabled`<sup>Required</sup> <a name="exportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.exportPolicyEnabled"></a>

```java
public java.lang.Object getExportPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkRuleBypassOption`<sup>Required</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.networkRuleBypassOption"></a>

```java
public java.lang.String getNetworkRuleBypassOption();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `quarantinePolicyEnabled`<sup>Required</sup> <a name="quarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.quarantinePolicyEnabled"></a>

```java
public java.lang.Object getQuarantinePolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInDays`<sup>Required</sup> <a name="retentionPolicyInDays" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.retentionPolicyInDays"></a>

```java
public java.lang.Number getRetentionPolicyInDays();
```

- *Type:* java.lang.Number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `trustPolicyEnabled`<sup>Required</sup> <a name="trustPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.trustPolicyEnabled"></a>

```java
public java.lang.Object getTrustPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneRedundancyEnabled`<sup>Required</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryConfig <a name="ContainerRegistryConfig" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryConfig;

ContainerRegistryConfig.builder()
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
    .sku(java.lang.String)
//  .adminEnabled(java.lang.Boolean)
//  .adminEnabled(IResolvable)
//  .anonymousPullEnabled(java.lang.Boolean)
//  .anonymousPullEnabled(IResolvable)
//  .dataEndpointEnabled(java.lang.Boolean)
//  .dataEndpointEnabled(IResolvable)
//  .encryption(IResolvable)
//  .encryption(java.util.List<ContainerRegistryEncryption>)
//  .exportPolicyEnabled(java.lang.Boolean)
//  .exportPolicyEnabled(IResolvable)
//  .georeplications(IResolvable)
//  .georeplications(java.util.List<ContainerRegistryGeoreplications>)
//  .id(java.lang.String)
//  .identity(ContainerRegistryIdentity)
//  .networkRuleBypassOption(java.lang.String)
//  .networkRuleSet(IResolvable)
//  .networkRuleSet(java.util.List<ContainerRegistryNetworkRuleSet>)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .quarantinePolicyEnabled(java.lang.Boolean)
//  .quarantinePolicyEnabled(IResolvable)
//  .retentionPolicyInDays(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerRegistryTimeouts)
//  .trustPolicyEnabled(java.lang.Boolean)
//  .trustPolicyEnabled(IResolvable)
//  .zoneRedundancyEnabled(java.lang.Boolean)
//  .zoneRedundancyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#name ContainerRegistry#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#sku ContainerRegistry#sku}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled">anonymousPullEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled">dataEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption">encryption</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled">exportPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications">georeplications</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>></code> | georeplications block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#id ContainerRegistry#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption">networkRuleBypassOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet">networkRuleSet</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled">quarantinePolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicyInDays">retentionPolicyInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.trustPolicyEnabled">trustPolicyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#trust_policy_enabled ContainerRegistry#trust_policy_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#name ContainerRegistry#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#resource_group_name ContainerRegistry#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#sku ContainerRegistry#sku}.

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.adminEnabled"></a>

```java
public java.lang.Object getAdminEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#admin_enabled ContainerRegistry#admin_enabled}.

---

##### `anonymousPullEnabled`<sup>Optional</sup> <a name="anonymousPullEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.anonymousPullEnabled"></a>

```java
public java.lang.Object getAnonymousPullEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#anonymous_pull_enabled ContainerRegistry#anonymous_pull_enabled}.

---

##### `dataEndpointEnabled`<sup>Optional</sup> <a name="dataEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.dataEndpointEnabled"></a>

```java
public java.lang.Object getDataEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#data_endpoint_enabled ContainerRegistry#data_endpoint_enabled}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.encryption"></a>

```java
public java.lang.Object getEncryption();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#encryption ContainerRegistry#encryption}.

---

##### `exportPolicyEnabled`<sup>Optional</sup> <a name="exportPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.exportPolicyEnabled"></a>

```java
public java.lang.Object getExportPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#export_policy_enabled ContainerRegistry#export_policy_enabled}.

---

##### `georeplications`<sup>Optional</sup> <a name="georeplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.georeplications"></a>

```java
public java.lang.Object getGeoreplications();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>>

georeplications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#georeplications ContainerRegistry#georeplications}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#id ContainerRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.identity"></a>

```java
public ContainerRegistryIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity ContainerRegistry#identity}

---

##### `networkRuleBypassOption`<sup>Optional</sup> <a name="networkRuleBypassOption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleBypassOption"></a>

```java
public java.lang.String getNetworkRuleBypassOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_bypass_option ContainerRegistry#network_rule_bypass_option}.

---

##### `networkRuleSet`<sup>Optional</sup> <a name="networkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.networkRuleSet"></a>

```java
public java.lang.Object getNetworkRuleSet();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#network_rule_set ContainerRegistry#network_rule_set}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#public_network_access_enabled ContainerRegistry#public_network_access_enabled}.

---

##### `quarantinePolicyEnabled`<sup>Optional</sup> <a name="quarantinePolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.quarantinePolicyEnabled"></a>

```java
public java.lang.Object getQuarantinePolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#quarantine_policy_enabled ContainerRegistry#quarantine_policy_enabled}.

---

##### `retentionPolicyInDays`<sup>Optional</sup> <a name="retentionPolicyInDays" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.retentionPolicyInDays"></a>

```java
public java.lang.Number getRetentionPolicyInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#retention_policy_in_days ContainerRegistry#retention_policy_in_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.timeouts"></a>

```java
public ContainerRegistryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#timeouts ContainerRegistry#timeouts}

---

##### `trustPolicyEnabled`<sup>Optional</sup> <a name="trustPolicyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.trustPolicyEnabled"></a>

```java
public java.lang.Object getTrustPolicyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#trust_policy_enabled ContainerRegistry#trust_policy_enabled}.

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryConfig.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryEncryption <a name="ContainerRegistryEncryption" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryEncryption;

ContainerRegistryEncryption.builder()
//  .identityClientId(java.lang.String)
//  .keyVaultKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}. |

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity_client_id ContainerRegistry#identity_client_id}.

---

##### `keyVaultKeyId`<sup>Optional</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#key_vault_key_id ContainerRegistry#key_vault_key_id}.

---

### ContainerRegistryGeoreplications <a name="ContainerRegistryGeoreplications" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryGeoreplications;

ContainerRegistryGeoreplications.builder()
    .location(java.lang.String)
//  .regionalEndpointEnabled(java.lang.Boolean)
//  .regionalEndpointEnabled(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .zoneRedundancyEnabled(java.lang.Boolean)
//  .zoneRedundancyEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.regionalEndpointEnabled">regionalEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#location ContainerRegistry#location}.

---

##### `regionalEndpointEnabled`<sup>Optional</sup> <a name="regionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.regionalEndpointEnabled"></a>

```java
public java.lang.Object getRegionalEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#regional_endpoint_enabled ContainerRegistry#regional_endpoint_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#tags ContainerRegistry#tags}.

---

##### `zoneRedundancyEnabled`<sup>Optional</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#zone_redundancy_enabled ContainerRegistry#zone_redundancy_enabled}.

---

### ContainerRegistryIdentity <a name="ContainerRegistryIdentity" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryIdentity;

ContainerRegistryIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#type ContainerRegistry#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#type ContainerRegistry#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#identity_ids ContainerRegistry#identity_ids}.

---

### ContainerRegistryNetworkRuleSet <a name="ContainerRegistryNetworkRuleSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSet;

ContainerRegistryNetworkRuleSet.builder()
//  .defaultAction(java.lang.String)
//  .ipRule(IResolvable)
//  .ipRule(java.util.List<ContainerRegistryNetworkRuleSetIpRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule">ipRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}. |

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#default_action ContainerRegistry#default_action}.

---

##### `ipRule`<sup>Optional</sup> <a name="ipRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet.property.ipRule"></a>

```java
public java.lang.Object getIpRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#ip_rule ContainerRegistry#ip_rule}.

---

### ContainerRegistryNetworkRuleSetIpRule <a name="ContainerRegistryNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSetIpRule;

ContainerRegistryNetworkRuleSetIpRule.builder()
//  .action(java.lang.String)
//  .ipRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#action ContainerRegistry#action}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#action ContainerRegistry#action}.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#ip_range ContainerRegistry#ip_range}.

---

### ContainerRegistryTimeouts <a name="ContainerRegistryTimeouts" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryTimeouts;

ContainerRegistryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#create ContainerRegistry#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#delete ContainerRegistry#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#read ContainerRegistry#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#update ContainerRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#create ContainerRegistry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#delete ContainerRegistry#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#read ContainerRegistry#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/container_registry#update ContainerRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryEncryptionList <a name="ContainerRegistryEncryptionList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryEncryptionList;

new ContainerRegistryEncryptionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get"></a>

```java
public ContainerRegistryEncryptionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>>

---


### ContainerRegistryEncryptionOutputReference <a name="ContainerRegistryEncryptionOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryEncryptionOutputReference;

new ContainerRegistryEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId">resetKeyVaultKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetIdentityClientId"></a>

```java
public void resetIdentityClientId()
```

##### `resetKeyVaultKeyId` <a name="resetKeyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.resetKeyVaultKeyId"></a>

```java
public void resetKeyVaultKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientIdInput"></a>

```java
public java.lang.String getIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryptionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryEncryption">ContainerRegistryEncryption</a>

---


### ContainerRegistryGeoreplicationsList <a name="ContainerRegistryGeoreplicationsList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryGeoreplicationsList;

new ContainerRegistryGeoreplicationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get"></a>

```java
public ContainerRegistryGeoreplicationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>>

---


### ContainerRegistryGeoreplicationsOutputReference <a name="ContainerRegistryGeoreplicationsOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryGeoreplicationsOutputReference;

new ContainerRegistryGeoreplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetRegionalEndpointEnabled">resetRegionalEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled">resetZoneRedundancyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegionalEndpointEnabled` <a name="resetRegionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetRegionalEndpointEnabled"></a>

```java
public void resetRegionalEndpointEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetTags"></a>

```java
public void resetTags()
```

##### `resetZoneRedundancyEnabled` <a name="resetZoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.resetZoneRedundancyEnabled"></a>

```java
public void resetZoneRedundancyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabledInput">regionalEndpointEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput">zoneRedundancyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabled">regionalEndpointEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled">zoneRedundancyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `regionalEndpointEnabledInput`<sup>Optional</sup> <a name="regionalEndpointEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabledInput"></a>

```java
public java.lang.Object getRegionalEndpointEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundancyEnabledInput`<sup>Optional</sup> <a name="zoneRedundancyEnabledInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabledInput"></a>

```java
public java.lang.Object getZoneRedundancyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `regionalEndpointEnabled`<sup>Required</sup> <a name="regionalEndpointEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.regionalEndpointEnabled"></a>

```java
public java.lang.Object getRegionalEndpointEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundancyEnabled`<sup>Required</sup> <a name="zoneRedundancyEnabled" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.zoneRedundancyEnabled"></a>

```java
public java.lang.Object getZoneRedundancyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplicationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryGeoreplications">ContainerRegistryGeoreplications</a>

---


### ContainerRegistryIdentityOutputReference <a name="ContainerRegistryIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryIdentityOutputReference;

new ContainerRegistryIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentityOutputReference.property.internalValue"></a>

```java
public ContainerRegistryIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryIdentity">ContainerRegistryIdentity</a>

---


### ContainerRegistryNetworkRuleSetIpRuleList <a name="ContainerRegistryNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSetIpRuleList;

new ContainerRegistryNetworkRuleSetIpRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get"></a>

```java
public ContainerRegistryNetworkRuleSetIpRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>>

---


### ContainerRegistryNetworkRuleSetIpRuleOutputReference <a name="ContainerRegistryNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSetIpRuleOutputReference;

new ContainerRegistryNetworkRuleSetIpRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange">resetIpRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.resetIpRange"></a>

```java
public void resetIpRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>

---


### ContainerRegistryNetworkRuleSetList <a name="ContainerRegistryNetworkRuleSetList" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSetList;

new ContainerRegistryNetworkRuleSetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get"></a>

```java
public ContainerRegistryNetworkRuleSetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>>

---


### ContainerRegistryNetworkRuleSetOutputReference <a name="ContainerRegistryNetworkRuleSetOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryNetworkRuleSetOutputReference;

new ContainerRegistryNetworkRuleSetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule">putIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule">resetIpRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpRule` <a name="putIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule"></a>

```java
public void putIpRule(IResolvable OR java.util.List<ContainerRegistryNetworkRuleSetIpRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.putIpRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetDefaultAction"></a>

```java
public void resetDefaultAction()
```

##### `resetIpRule` <a name="resetIpRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.resetIpRule"></a>

```java
public void resetIpRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule">ipRule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput">ipRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipRule`<sup>Required</sup> <a name="ipRule" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRule"></a>

```java
public ContainerRegistryNetworkRuleSetIpRuleList getIpRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRuleList">ContainerRegistryNetworkRuleSetIpRuleList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRuleInput`<sup>Optional</sup> <a name="ipRuleInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.ipRuleInput"></a>

```java
public java.lang.Object getIpRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetIpRule">ContainerRegistryNetworkRuleSetIpRule</a>>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSetOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryNetworkRuleSet">ContainerRegistryNetworkRuleSet</a>

---


### ContainerRegistryTimeoutsOutputReference <a name="ContainerRegistryTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.container_registry.ContainerRegistryTimeoutsOutputReference;

new ContainerRegistryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.containerRegistry.ContainerRegistryTimeouts">ContainerRegistryTimeouts</a>

---



