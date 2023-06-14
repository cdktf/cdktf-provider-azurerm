# `azurerm_cognitive_account`

Refer to the Terraform Registory for docs: [`azurerm_cognitive_account`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account).

# `cognitiveAccount` Submodule <a name="`cognitiveAccount` Submodule" id="@cdktf/provider-azurerm.cognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitiveAccount <a name="CognitiveAccount" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccount;

CognitiveAccount.Builder.create(Construct scope, java.lang.String id)
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
    .kind(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .customerManagedKey(CognitiveAccountCustomerManagedKey)
//  .customQuestionAnsweringSearchServiceId(java.lang.String)
//  .customQuestionAnsweringSearchServiceKey(java.lang.String)
//  .customSubdomainName(java.lang.String)
//  .dynamicThrottlingEnabled(java.lang.Boolean)
//  .dynamicThrottlingEnabled(IResolvable)
//  .fqdns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identity(CognitiveAccountIdentity)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .metricsAdvisorAadClientId(java.lang.String)
//  .metricsAdvisorAadTenantId(java.lang.String)
//  .metricsAdvisorSuperUserName(java.lang.String)
//  .metricsAdvisorWebsiteName(java.lang.String)
//  .networkAcls(CognitiveAccountNetworkAcls)
//  .outboundNetworkAccessRestricted(java.lang.Boolean)
//  .outboundNetworkAccessRestricted(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .qnaRuntimeEndpoint(java.lang.String)
//  .storage(IResolvable)
//  .storage(java.util.List<CognitiveAccountStorage>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CognitiveAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#location CognitiveAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#name CognitiveAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customQuestionAnsweringSearchServiceKey">customQuestionAnsweringSearchServiceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customSubdomainName">customSubdomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#id CognitiveAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.storage">storage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#location CognitiveAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#name CognitiveAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#customer_managed_key CognitiveAccount#customer_managed_key}

---

##### `customQuestionAnsweringSearchServiceId`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customQuestionAnsweringSearchServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}.

---

##### `customQuestionAnsweringSearchServiceKey`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customQuestionAnsweringSearchServiceKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}.

---

##### `customSubdomainName`<sup>Optional</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.customSubdomainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}.

---

##### `dynamicThrottlingEnabled`<sup>Optional</sup> <a name="dynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.dynamicThrottlingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.fqdns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#id CognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity CognitiveAccount#identity}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.localAuthEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}.

---

##### `metricsAdvisorAadClientId`<sup>Optional</sup> <a name="metricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorAadClientId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}.

---

##### `metricsAdvisorAadTenantId`<sup>Optional</sup> <a name="metricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorAadTenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}.

---

##### `metricsAdvisorSuperUserName`<sup>Optional</sup> <a name="metricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorSuperUserName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}.

---

##### `metricsAdvisorWebsiteName`<sup>Optional</sup> <a name="metricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.metricsAdvisorWebsiteName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.networkAcls"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#network_acls CognitiveAccount#network_acls}

---

##### `outboundNetworkAccessRestricted`<sup>Optional</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.outboundNetworkAccessRestricted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}.

---

##### `qnaRuntimeEndpoint`<sup>Optional</sup> <a name="qnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.qnaRuntimeEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.storage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#storage CognitiveAccount#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#timeouts CognitiveAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls">putNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId">resetCustomQuestionAnsweringSearchServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey">resetCustomQuestionAnsweringSearchServiceKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName">resetCustomSubdomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled">resetDynamicThrottlingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns">resetFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId">resetMetricsAdvisorAadClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId">resetMetricsAdvisorAadTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName">resetMetricsAdvisorSuperUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName">resetMetricsAdvisorWebsiteName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls">resetNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted">resetOutboundNetworkAccessRestricted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint">resetQnaRuntimeEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey"></a>

```java
public void putCustomerManagedKey(CognitiveAccountCustomerManagedKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putCustomerManagedKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity"></a>

```java
public void putIdentity(CognitiveAccountIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `putNetworkAcls` <a name="putNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls"></a>

```java
public void putNetworkAcls(CognitiveAccountNetworkAcls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putNetworkAcls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage"></a>

```java
public void putStorage(IResolvable OR java.util.List<CognitiveAccountStorage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putStorage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts"></a>

```java
public void putTimeouts(CognitiveAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

---

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomerManagedKey"></a>

```java
public void resetCustomerManagedKey()
```

##### `resetCustomQuestionAnsweringSearchServiceId` <a name="resetCustomQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceId"></a>

```java
public void resetCustomQuestionAnsweringSearchServiceId()
```

##### `resetCustomQuestionAnsweringSearchServiceKey` <a name="resetCustomQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomQuestionAnsweringSearchServiceKey"></a>

```java
public void resetCustomQuestionAnsweringSearchServiceKey()
```

##### `resetCustomSubdomainName` <a name="resetCustomSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetCustomSubdomainName"></a>

```java
public void resetCustomSubdomainName()
```

##### `resetDynamicThrottlingEnabled` <a name="resetDynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetDynamicThrottlingEnabled"></a>

```java
public void resetDynamicThrottlingEnabled()
```

##### `resetFqdns` <a name="resetFqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetFqdns"></a>

```java
public void resetFqdns()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetLocalAuthEnabled"></a>

```java
public void resetLocalAuthEnabled()
```

##### `resetMetricsAdvisorAadClientId` <a name="resetMetricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadClientId"></a>

```java
public void resetMetricsAdvisorAadClientId()
```

##### `resetMetricsAdvisorAadTenantId` <a name="resetMetricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorAadTenantId"></a>

```java
public void resetMetricsAdvisorAadTenantId()
```

##### `resetMetricsAdvisorSuperUserName` <a name="resetMetricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorSuperUserName"></a>

```java
public void resetMetricsAdvisorSuperUserName()
```

##### `resetMetricsAdvisorWebsiteName` <a name="resetMetricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetMetricsAdvisorWebsiteName"></a>

```java
public void resetMetricsAdvisorWebsiteName()
```

##### `resetNetworkAcls` <a name="resetNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetNetworkAcls"></a>

```java
public void resetNetworkAcls()
```

##### `resetOutboundNetworkAccessRestricted` <a name="resetOutboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetOutboundNetworkAccessRestricted"></a>

```java
public void resetOutboundNetworkAccessRestricted()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetQnaRuntimeEndpoint` <a name="resetQnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetQnaRuntimeEndpoint"></a>

```java
public void resetQnaRuntimeEndpoint()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccount;

CognitiveAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccount;

CognitiveAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccount;

CognitiveAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput">customQuestionAnsweringSearchServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput">customQuestionAnsweringSearchServiceKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput">customSubdomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput">dynamicThrottlingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput">fqdnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput">metricsAdvisorAadClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput">metricsAdvisorAadTenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput">metricsAdvisorSuperUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput">metricsAdvisorWebsiteNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput">networkAclsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput">outboundNetworkAccessRestrictedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput">qnaRuntimeEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput">storageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey">customQuestionAnsweringSearchServiceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName">customSubdomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKey"></a>

```java
public CognitiveAccountCustomerManagedKeyOutputReference getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference">CognitiveAccountCustomerManagedKeyOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identity"></a>

```java
public CognitiveAccountIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference">CognitiveAccountIdentityOutputReference</a>

---

##### `networkAcls`<sup>Required</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAcls"></a>

```java
public CognitiveAccountNetworkAclsOutputReference getNetworkAcls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference">CognitiveAccountNetworkAclsOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storage"></a>

```java
public CognitiveAccountStorageList getStorage();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList">CognitiveAccountStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeouts"></a>

```java
public CognitiveAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference">CognitiveAccountTimeoutsOutputReference</a>

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customerManagedKeyInput"></a>

```java
public CognitiveAccountCustomerManagedKey getCustomerManagedKeyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---

##### `customQuestionAnsweringSearchServiceIdInput`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceIdInput"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceIdInput();
```

- *Type:* java.lang.String

---

##### `customQuestionAnsweringSearchServiceKeyInput`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceKeyInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKeyInput"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceKeyInput();
```

- *Type:* java.lang.String

---

##### `customSubdomainNameInput`<sup>Optional</sup> <a name="customSubdomainNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainNameInput"></a>

```java
public java.lang.String getCustomSubdomainNameInput();
```

- *Type:* java.lang.String

---

##### `dynamicThrottlingEnabledInput`<sup>Optional</sup> <a name="dynamicThrottlingEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabledInput"></a>

```java
public java.lang.Object getDynamicThrottlingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fqdnsInput`<sup>Optional</sup> <a name="fqdnsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdnsInput"></a>

```java
public java.util.List<java.lang.String> getFqdnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.identityInput"></a>

```java
public CognitiveAccountIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabledInput"></a>

```java
public java.lang.Object getLocalAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorAadClientIdInput`<sup>Optional</sup> <a name="metricsAdvisorAadClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientIdInput"></a>

```java
public java.lang.String getMetricsAdvisorAadClientIdInput();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorAadTenantIdInput`<sup>Optional</sup> <a name="metricsAdvisorAadTenantIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantIdInput"></a>

```java
public java.lang.String getMetricsAdvisorAadTenantIdInput();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorSuperUserNameInput`<sup>Optional</sup> <a name="metricsAdvisorSuperUserNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserNameInput"></a>

```java
public java.lang.String getMetricsAdvisorSuperUserNameInput();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorWebsiteNameInput`<sup>Optional</sup> <a name="metricsAdvisorWebsiteNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteNameInput"></a>

```java
public java.lang.String getMetricsAdvisorWebsiteNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkAclsInput`<sup>Optional</sup> <a name="networkAclsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.networkAclsInput"></a>

```java
public CognitiveAccountNetworkAcls getNetworkAclsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---

##### `outboundNetworkAccessRestrictedInput`<sup>Optional</sup> <a name="outboundNetworkAccessRestrictedInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestrictedInput"></a>

```java
public java.lang.Object getOutboundNetworkAccessRestrictedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `qnaRuntimeEndpointInput`<sup>Optional</sup> <a name="qnaRuntimeEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpointInput"></a>

```java
public java.lang.String getQnaRuntimeEndpointInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.storageInput"></a>

```java
public java.lang.Object getStorageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `customQuestionAnsweringSearchServiceId`<sup>Required</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceId();
```

- *Type:* java.lang.String

---

##### `customQuestionAnsweringSearchServiceKey`<sup>Required</sup> <a name="customQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customQuestionAnsweringSearchServiceKey"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceKey();
```

- *Type:* java.lang.String

---

##### `customSubdomainName`<sup>Required</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.customSubdomainName"></a>

```java
public java.lang.String getCustomSubdomainName();
```

- *Type:* java.lang.String

---

##### `dynamicThrottlingEnabled`<sup>Required</sup> <a name="dynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.dynamicThrottlingEnabled"></a>

```java
public java.lang.Object getDynamicThrottlingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.fqdns"></a>

```java
public java.util.List<java.lang.String> getFqdns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorAadClientId`<sup>Required</sup> <a name="metricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadClientId"></a>

```java
public java.lang.String getMetricsAdvisorAadClientId();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorAadTenantId`<sup>Required</sup> <a name="metricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```java
public java.lang.String getMetricsAdvisorAadTenantId();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorSuperUserName`<sup>Required</sup> <a name="metricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```java
public java.lang.String getMetricsAdvisorSuperUserName();
```

- *Type:* java.lang.String

---

##### `metricsAdvisorWebsiteName`<sup>Required</sup> <a name="metricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```java
public java.lang.String getMetricsAdvisorWebsiteName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outboundNetworkAccessRestricted`<sup>Required</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```java
public java.lang.Object getOutboundNetworkAccessRestricted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `qnaRuntimeEndpoint`<sup>Required</sup> <a name="qnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.qnaRuntimeEndpoint"></a>

```java
public java.lang.String getQnaRuntimeEndpoint();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitiveAccountConfig <a name="CognitiveAccountConfig" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountConfig;

CognitiveAccountConfig.builder()
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
    .kind(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .customerManagedKey(CognitiveAccountCustomerManagedKey)
//  .customQuestionAnsweringSearchServiceId(java.lang.String)
//  .customQuestionAnsweringSearchServiceKey(java.lang.String)
//  .customSubdomainName(java.lang.String)
//  .dynamicThrottlingEnabled(java.lang.Boolean)
//  .dynamicThrottlingEnabled(IResolvable)
//  .fqdns(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identity(CognitiveAccountIdentity)
//  .localAuthEnabled(java.lang.Boolean)
//  .localAuthEnabled(IResolvable)
//  .metricsAdvisorAadClientId(java.lang.String)
//  .metricsAdvisorAadTenantId(java.lang.String)
//  .metricsAdvisorSuperUserName(java.lang.String)
//  .metricsAdvisorWebsiteName(java.lang.String)
//  .networkAcls(CognitiveAccountNetworkAcls)
//  .outboundNetworkAccessRestricted(java.lang.Boolean)
//  .outboundNetworkAccessRestricted(IResolvable)
//  .publicNetworkAccessEnabled(java.lang.Boolean)
//  .publicNetworkAccessEnabled(IResolvable)
//  .qnaRuntimeEndpoint(java.lang.String)
//  .storage(IResolvable)
//  .storage(java.util.List<CognitiveAccountStorage>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CognitiveAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#location CognitiveAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#name CognitiveAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey">customerManagedKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId">customQuestionAnsweringSearchServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey">customQuestionAnsweringSearchServiceKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName">customSubdomainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled">dynamicThrottlingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns">fqdns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#id CognitiveAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId">metricsAdvisorAadClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId">metricsAdvisorAadTenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName">metricsAdvisorSuperUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName">metricsAdvisorWebsiteName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls">networkAcls</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | network_acls block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted">outboundNetworkAccessRestricted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint">qnaRuntimeEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage">storage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>></code> | storage block. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#kind CognitiveAccount#kind}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#location CognitiveAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#name CognitiveAccount#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#resource_group_name CognitiveAccount#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#sku_name CognitiveAccount#sku_name}.

---

##### `customerManagedKey`<sup>Optional</sup> <a name="customerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customerManagedKey"></a>

```java
public CognitiveAccountCustomerManagedKey getCustomerManagedKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#customer_managed_key CognitiveAccount#customer_managed_key}

---

##### `customQuestionAnsweringSearchServiceId`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceId"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_id CognitiveAccount#custom_question_answering_search_service_id}.

---

##### `customQuestionAnsweringSearchServiceKey`<sup>Optional</sup> <a name="customQuestionAnsweringSearchServiceKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customQuestionAnsweringSearchServiceKey"></a>

```java
public java.lang.String getCustomQuestionAnsweringSearchServiceKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_question_answering_search_service_key CognitiveAccount#custom_question_answering_search_service_key}.

---

##### `customSubdomainName`<sup>Optional</sup> <a name="customSubdomainName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.customSubdomainName"></a>

```java
public java.lang.String getCustomSubdomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#custom_subdomain_name CognitiveAccount#custom_subdomain_name}.

---

##### `dynamicThrottlingEnabled`<sup>Optional</sup> <a name="dynamicThrottlingEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.dynamicThrottlingEnabled"></a>

```java
public java.lang.Object getDynamicThrottlingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#dynamic_throttling_enabled CognitiveAccount#dynamic_throttling_enabled}.

---

##### `fqdns`<sup>Optional</sup> <a name="fqdns" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.fqdns"></a>

```java
public java.util.List<java.lang.String> getFqdns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#fqdns CognitiveAccount#fqdns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#id CognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.identity"></a>

```java
public CognitiveAccountIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity CognitiveAccount#identity}

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.localAuthEnabled"></a>

```java
public java.lang.Object getLocalAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#local_auth_enabled CognitiveAccount#local_auth_enabled}.

---

##### `metricsAdvisorAadClientId`<sup>Optional</sup> <a name="metricsAdvisorAadClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadClientId"></a>

```java
public java.lang.String getMetricsAdvisorAadClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_client_id CognitiveAccount#metrics_advisor_aad_client_id}.

---

##### `metricsAdvisorAadTenantId`<sup>Optional</sup> <a name="metricsAdvisorAadTenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorAadTenantId"></a>

```java
public java.lang.String getMetricsAdvisorAadTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_aad_tenant_id CognitiveAccount#metrics_advisor_aad_tenant_id}.

---

##### `metricsAdvisorSuperUserName`<sup>Optional</sup> <a name="metricsAdvisorSuperUserName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorSuperUserName"></a>

```java
public java.lang.String getMetricsAdvisorSuperUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_super_user_name CognitiveAccount#metrics_advisor_super_user_name}.

---

##### `metricsAdvisorWebsiteName`<sup>Optional</sup> <a name="metricsAdvisorWebsiteName" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.metricsAdvisorWebsiteName"></a>

```java
public java.lang.String getMetricsAdvisorWebsiteName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#metrics_advisor_website_name CognitiveAccount#metrics_advisor_website_name}.

---

##### `networkAcls`<sup>Optional</sup> <a name="networkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.networkAcls"></a>

```java
public CognitiveAccountNetworkAcls getNetworkAcls();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

network_acls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#network_acls CognitiveAccount#network_acls}

---

##### `outboundNetworkAccessRestricted`<sup>Optional</sup> <a name="outboundNetworkAccessRestricted" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.outboundNetworkAccessRestricted"></a>

```java
public java.lang.Object getOutboundNetworkAccessRestricted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#outbound_network_access_restricted CognitiveAccount#outbound_network_access_restricted}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Object getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#public_network_access_enabled CognitiveAccount#public_network_access_enabled}.

---

##### `qnaRuntimeEndpoint`<sup>Optional</sup> <a name="qnaRuntimeEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.qnaRuntimeEndpoint"></a>

```java
public java.lang.String getQnaRuntimeEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#qna_runtime_endpoint CognitiveAccount#qna_runtime_endpoint}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.storage"></a>

```java
public java.lang.Object getStorage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#storage CognitiveAccount#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#tags CognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountConfig.property.timeouts"></a>

```java
public CognitiveAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#timeouts CognitiveAccount#timeouts}

---

### CognitiveAccountCustomerManagedKey <a name="CognitiveAccountCustomerManagedKey" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountCustomerManagedKey;

CognitiveAccountCustomerManagedKey.builder()
    .keyVaultKeyId(java.lang.String)
//  .identityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#key_vault_key_id CognitiveAccount#key_vault_key_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountIdentity <a name="CognitiveAccountIdentity" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountIdentity;

CognitiveAccountIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#type CognitiveAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#type CognitiveAccount#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_ids CognitiveAccount#identity_ids}.

---

### CognitiveAccountNetworkAcls <a name="CognitiveAccountNetworkAcls" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountNetworkAcls;

CognitiveAccountNetworkAcls.builder()
    .defaultAction(java.lang.String)
//  .ipRules(java.util.List<java.lang.String>)
//  .virtualNetworkRules(IResolvable)
//  .virtualNetworkRules(java.util.List<CognitiveAccountNetworkAclsVirtualNetworkRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>></code> | virtual_network_rules block. |

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#default_action CognitiveAccount#default_action}.

---

##### `ipRules`<sup>Optional</sup> <a name="ipRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#ip_rules CognitiveAccount#ip_rules}.

---

##### `virtualNetworkRules`<sup>Optional</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls.property.virtualNetworkRules"></a>

```java
public java.lang.Object getVirtualNetworkRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>>

virtual_network_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#virtual_network_rules CognitiveAccount#virtual_network_rules}

---

### CognitiveAccountNetworkAclsVirtualNetworkRules <a name="CognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountNetworkAclsVirtualNetworkRules;

CognitiveAccountNetworkAclsVirtualNetworkRules.builder()
    .subnetId(java.lang.String)
//  .ignoreMissingVnetServiceEndpoint(java.lang.Boolean)
//  .ignoreMissingVnetServiceEndpoint(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#subnet_id CognitiveAccount#subnet_id}.

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules.property.ignoreMissingVnetServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#ignore_missing_vnet_service_endpoint CognitiveAccount#ignore_missing_vnet_service_endpoint}.

---

### CognitiveAccountStorage <a name="CognitiveAccountStorage" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountStorage;

CognitiveAccountStorage.builder()
    .storageAccountId(java.lang.String)
//  .identityClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}. |

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#storage_account_id CognitiveAccount#storage_account_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#identity_client_id CognitiveAccount#identity_client_id}.

---

### CognitiveAccountTimeouts <a name="CognitiveAccountTimeouts" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountTimeouts;

CognitiveAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#create CognitiveAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#read CognitiveAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#update CognitiveAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#create CognitiveAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#delete CognitiveAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#read CognitiveAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cognitive_account#update CognitiveAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitiveAccountCustomerManagedKeyOutputReference <a name="CognitiveAccountCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountCustomerManagedKeyOutputReference;

new CognitiveAccountCustomerManagedKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.resetIdentityClientId"></a>

```java
public void resetIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">keyVaultKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">keyVaultKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientIdInput"></a>

```java
public java.lang.String getIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyIdInput`<sup>Optional</sup> <a name="keyVaultKeyIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```java
public java.lang.String getKeyVaultKeyIdInput();
```

- *Type:* java.lang.String

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

---

##### `keyVaultKeyId`<sup>Required</sup> <a name="keyVaultKeyId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```java
public java.lang.String getKeyVaultKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```java
public CognitiveAccountCustomerManagedKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountCustomerManagedKey">CognitiveAccountCustomerManagedKey</a>

---


### CognitiveAccountIdentityOutputReference <a name="CognitiveAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountIdentityOutputReference;

new CognitiveAccountIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentityOutputReference.property.internalValue"></a>

```java
public CognitiveAccountIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountIdentity">CognitiveAccountIdentity</a>

---


### CognitiveAccountNetworkAclsOutputReference <a name="CognitiveAccountNetworkAclsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountNetworkAclsOutputReference;

new CognitiveAccountNetworkAclsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules">putVirtualNetworkRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules">resetIpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules">resetVirtualNetworkRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVirtualNetworkRules` <a name="putVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules"></a>

```java
public void putVirtualNetworkRules(IResolvable OR java.util.List<CognitiveAccountNetworkAclsVirtualNetworkRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.putVirtualNetworkRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>>

---

##### `resetIpRules` <a name="resetIpRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetIpRules"></a>

```java
public void resetIpRules()
```

##### `resetVirtualNetworkRules` <a name="resetVirtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.resetVirtualNetworkRules"></a>

```java
public void resetVirtualNetworkRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">virtualNetworkRules</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput">ipRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput">virtualNetworkRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules">ipRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `virtualNetworkRules`<sup>Required</sup> <a name="virtualNetworkRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```java
public CognitiveAccountNetworkAclsVirtualNetworkRulesList getVirtualNetworkRules();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList">CognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `ipRulesInput`<sup>Optional</sup> <a name="ipRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRulesInput"></a>

```java
public java.util.List<java.lang.String> getIpRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualNetworkRulesInput`<sup>Optional</sup> <a name="virtualNetworkRulesInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRulesInput"></a>

```java
public java.lang.Object getVirtualNetworkRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `ipRules`<sup>Required</sup> <a name="ipRules" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```java
public java.util.List<java.lang.String> getIpRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```java
public CognitiveAccountNetworkAcls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAcls">CognitiveAccountNetworkAcls</a>

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountNetworkAclsVirtualNetworkRulesList;

new CognitiveAccountNetworkAclsVirtualNetworkRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```java
public CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a>>

---


### CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference;

new CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint">resetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreMissingVnetServiceEndpoint` <a name="resetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```java
public void resetIgnoreMissingVnetServiceEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignoreMissingVnetServiceEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignoreMissingVnetServiceEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="ignoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="ignoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```java
public java.lang.Object getIgnoreMissingVnetServiceEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountNetworkAclsVirtualNetworkRules">CognitiveAccountNetworkAclsVirtualNetworkRules</a> OR com.hashicorp.cdktf.IResolvable

---


### CognitiveAccountStorageList <a name="CognitiveAccountStorageList" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountStorageList;

new CognitiveAccountStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get"></a>

```java
public CognitiveAccountStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a>>

---


### CognitiveAccountStorageOutputReference <a name="CognitiveAccountStorageOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountStorageOutputReference;

new CognitiveAccountStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.resetIdentityClientId"></a>

```java
public void resetIdentityClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId">identityClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientIdInput"></a>

```java
public java.lang.String getIdentityClientIdInput();
```

- *Type:* java.lang.String

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.identityClientId"></a>

```java
public java.lang.String getIdentityClientId();
```

- *Type:* java.lang.String

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountStorage">CognitiveAccountStorage</a> OR com.hashicorp.cdktf.IResolvable

---


### CognitiveAccountTimeoutsOutputReference <a name="CognitiveAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cognitive_account.CognitiveAccountTimeoutsOutputReference;

new CognitiveAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cognitiveAccount.CognitiveAccountTimeouts">CognitiveAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



