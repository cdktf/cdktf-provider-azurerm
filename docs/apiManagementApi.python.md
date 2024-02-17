# `apiManagementApi` Submodule <a name="`apiManagementApi` Submodule" id="@cdktf/provider-azurerm.apiManagementApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApi <a name="ApiManagementApi" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api azurerm_api_management_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApi(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  name: str,
  resource_group_name: str,
  revision: str,
  api_type: str = None,
  contact: ApiManagementApiContact = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  import: ApiManagementApiImport = None,
  license: ApiManagementApiLicense = None,
  oauth2_authorization: ApiManagementApiOauth2Authorization = None,
  openid_authentication: ApiManagementApiOpenidAuthentication = None,
  path: str = None,
  protocols: typing.List[str] = None,
  revision_description: str = None,
  service_url: str = None,
  soap_pass_through: typing.Union[bool, IResolvable] = None,
  source_api_id: str = None,
  subscription_key_parameter_names: ApiManagementApiSubscriptionKeyParameterNames = None,
  subscription_required: typing.Union[bool, IResolvable] = None,
  terms_of_service_url: str = None,
  timeouts: ApiManagementApiTimeouts = None,
  version: str = None,
  version_description: str = None,
  version_set_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.revision">revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision ApiManagementApi#revision}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.apiType">api_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#description ApiManagementApi#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#id ApiManagementApi#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.license">license</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | license block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.oauth2Authorization">oauth2_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | oauth2_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.openidAuthentication">openid_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | openid_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#path ApiManagementApi#path}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.revisionDescription">revision_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.serviceUrl">service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.soapPassThrough">soap_pass_through</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#soap_pass_through ApiManagementApi#soap_pass_through}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.sourceApiId">source_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.subscriptionKeyParameterNames">subscription_key_parameter_names</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | subscription_key_parameter_names block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version ApiManagementApi#version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.versionSetId">version_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.revision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision ApiManagementApi#revision}.

---

##### `api_type`<sup>Optional</sup> <a name="api_type" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.apiType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.contact"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#contact ApiManagementApi#contact}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#description ApiManagementApi#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#id ApiManagementApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.import"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#import ApiManagementApi#import}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.license"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#license ApiManagementApi#license}

---

##### `oauth2_authorization`<sup>Optional</sup> <a name="oauth2_authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.oauth2Authorization"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

oauth2_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#oauth2_authorization ApiManagementApi#oauth2_authorization}

---

##### `openid_authentication`<sup>Optional</sup> <a name="openid_authentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.openidAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

openid_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#openid_authentication ApiManagementApi#openid_authentication}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#path ApiManagementApi#path}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.protocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}.

---

##### `revision_description`<sup>Optional</sup> <a name="revision_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.revisionDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}.

---

##### `service_url`<sup>Optional</sup> <a name="service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.serviceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}.

---

##### `soap_pass_through`<sup>Optional</sup> <a name="soap_pass_through" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.soapPassThrough"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#soap_pass_through ApiManagementApi#soap_pass_through}.

---

##### `source_api_id`<sup>Optional</sup> <a name="source_api_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.sourceApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}.

---

##### `subscription_key_parameter_names`<sup>Optional</sup> <a name="subscription_key_parameter_names" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.subscriptionKeyParameterNames"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

subscription_key_parameter_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}

---

##### `subscription_required`<sup>Optional</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.subscriptionRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}.

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.termsOfServiceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#timeouts ApiManagementApi#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version ApiManagementApi#version}.

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.versionDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}.

---

##### `version_set_id`<sup>Optional</sup> <a name="version_set_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.Initializer.parameter.versionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact">put_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport">put_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense">put_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization">put_oauth2_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication">put_openid_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames">put_subscription_key_parameter_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType">reset_api_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact">reset_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport">reset_import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense">reset_license</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization">reset_oauth2_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication">reset_openid_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols">reset_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription">reset_revision_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl">reset_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSoapPassThrough">reset_soap_pass_through</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId">reset_source_api_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames">reset_subscription_key_parameter_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired">reset_subscription_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl">reset_terms_of_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription">reset_version_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId">reset_version_set_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_contact` <a name="put_contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact"></a>

```python
def put_contact(
  email: str = None,
  name: str = None,
  url: str = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#email ApiManagementApi#email}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putContact.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

##### `put_import` <a name="put_import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport"></a>

```python
def put_import(
  content_format: str,
  content_value: str,
  wsdl_selector: ApiManagementApiImportWsdlSelector = None
) -> None
```

###### `content_format`<sup>Required</sup> <a name="content_format" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport.parameter.contentFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}.

---

###### `content_value`<sup>Required</sup> <a name="content_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport.parameter.contentValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}.

---

###### `wsdl_selector`<sup>Optional</sup> <a name="wsdl_selector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putImport.parameter.wsdlSelector"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

wsdl_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#wsdl_selector ApiManagementApi#wsdl_selector}

---

##### `put_license` <a name="put_license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense"></a>

```python
def put_license(
  name: str = None,
  url: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putLicense.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

##### `put_oauth2_authorization` <a name="put_oauth2_authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization"></a>

```python
def put_oauth2_authorization(
  authorization_server_name: str,
  scope: str = None
) -> None
```

###### `authorization_server_name`<sup>Required</sup> <a name="authorization_server_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization.parameter.authorizationServerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOauth2Authorization.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#scope ApiManagementApi#scope}.

---

##### `put_openid_authentication` <a name="put_openid_authentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication"></a>

```python
def put_openid_authentication(
  openid_provider_name: str,
  bearer_token_sending_methods: typing.List[str] = None
) -> None
```

###### `openid_provider_name`<sup>Required</sup> <a name="openid_provider_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication.parameter.openidProviderName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}.

---

###### `bearer_token_sending_methods`<sup>Optional</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putOpenidAuthentication.parameter.bearerTokenSendingMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}.

---

##### `put_subscription_key_parameter_names` <a name="put_subscription_key_parameter_names" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames"></a>

```python
def put_subscription_key_parameter_names(
  header: str,
  query: str
) -> None
```

###### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames.parameter.header"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#header ApiManagementApi#header}.

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putSubscriptionKeyParameterNames.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#query ApiManagementApi#query}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#create ApiManagementApi#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#delete ApiManagementApi#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#read ApiManagementApi#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#update ApiManagementApi#update}.

---

##### `reset_api_type` <a name="reset_api_type" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetApiType"></a>

```python
def reset_api_type() -> None
```

##### `reset_contact` <a name="reset_contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetContact"></a>

```python
def reset_contact() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import` <a name="reset_import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetImport"></a>

```python
def reset_import() -> None
```

##### `reset_license` <a name="reset_license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetLicense"></a>

```python
def reset_license() -> None
```

##### `reset_oauth2_authorization` <a name="reset_oauth2_authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOauth2Authorization"></a>

```python
def reset_oauth2_authorization() -> None
```

##### `reset_openid_authentication` <a name="reset_openid_authentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetOpenidAuthentication"></a>

```python
def reset_openid_authentication() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_protocols` <a name="reset_protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetProtocols"></a>

```python
def reset_protocols() -> None
```

##### `reset_revision_description` <a name="reset_revision_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetRevisionDescription"></a>

```python
def reset_revision_description() -> None
```

##### `reset_service_url` <a name="reset_service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetServiceUrl"></a>

```python
def reset_service_url() -> None
```

##### `reset_soap_pass_through` <a name="reset_soap_pass_through" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSoapPassThrough"></a>

```python
def reset_soap_pass_through() -> None
```

##### `reset_source_api_id` <a name="reset_source_api_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSourceApiId"></a>

```python
def reset_source_api_id() -> None
```

##### `reset_subscription_key_parameter_names` <a name="reset_subscription_key_parameter_names" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionKeyParameterNames"></a>

```python
def reset_subscription_key_parameter_names() -> None
```

##### `reset_subscription_required` <a name="reset_subscription_required" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetSubscriptionRequired"></a>

```python
def reset_subscription_required() -> None
```

##### `reset_terms_of_service_url` <a name="reset_terms_of_service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTermsOfServiceUrl"></a>

```python
def reset_terms_of_service_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```

##### `reset_version_set_id` <a name="reset_version_set_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.resetVersionSetId"></a>

```python
def reset_version_set_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApi.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementApi resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent">is_current</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline">is_online</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license">license</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization">oauth2_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication">openid_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames">subscription_key_parameter_names</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput">api_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput">contact_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput">import_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput">license_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput">oauth2_authorization_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput">openid_authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput">revision_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput">service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.soapPassThroughInput">soap_pass_through_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput">source_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput">subscription_key_parameter_names_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput">subscription_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput">terms_of_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput">version_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription">revision_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.soapPassThrough">soap_pass_through</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId">source_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId">version_set_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contact"></a>

```python
contact: ApiManagementApiContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference">ApiManagementApiContactOutputReference</a>

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.import"></a>

```python
import: ApiManagementApiImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference">ApiManagementApiImportOutputReference</a>

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_online`<sup>Required</sup> <a name="is_online" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.isOnline"></a>

```python
is_online: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license`<sup>Required</sup> <a name="license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.license"></a>

```python
license: ApiManagementApiLicenseOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference">ApiManagementApiLicenseOutputReference</a>

---

##### `oauth2_authorization`<sup>Required</sup> <a name="oauth2_authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2Authorization"></a>

```python
oauth2_authorization: ApiManagementApiOauth2AuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference">ApiManagementApiOauth2AuthorizationOutputReference</a>

---

##### `openid_authentication`<sup>Required</sup> <a name="openid_authentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthentication"></a>

```python
openid_authentication: ApiManagementApiOpenidAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference">ApiManagementApiOpenidAuthenticationOutputReference</a>

---

##### `subscription_key_parameter_names`<sup>Required</sup> <a name="subscription_key_parameter_names" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNames"></a>

```python
subscription_key_parameter_names: ApiManagementApiSubscriptionKeyParameterNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference">ApiManagementApiSubscriptionKeyParameterNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeouts"></a>

```python
timeouts: ApiManagementApiTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference">ApiManagementApiTimeoutsOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `api_type_input`<sup>Optional</sup> <a name="api_type_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiTypeInput"></a>

```python
api_type_input: str
```

- *Type:* str

---

##### `contact_input`<sup>Optional</sup> <a name="contact_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.contactInput"></a>

```python
contact_input: ApiManagementApiContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_input`<sup>Optional</sup> <a name="import_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.importInput"></a>

```python
import_input: ApiManagementApiImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.licenseInput"></a>

```python
license_input: ApiManagementApiLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth2_authorization_input`<sup>Optional</sup> <a name="oauth2_authorization_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.oauth2AuthorizationInput"></a>

```python
oauth2_authorization_input: ApiManagementApiOauth2Authorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---

##### `openid_authentication_input`<sup>Optional</sup> <a name="openid_authentication_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.openidAuthenticationInput"></a>

```python
openid_authentication_input: ApiManagementApiOpenidAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `revision_description_input`<sup>Optional</sup> <a name="revision_description_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescriptionInput"></a>

```python
revision_description_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `service_url_input`<sup>Optional</sup> <a name="service_url_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrlInput"></a>

```python
service_url_input: str
```

- *Type:* str

---

##### `soap_pass_through_input`<sup>Optional</sup> <a name="soap_pass_through_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.soapPassThroughInput"></a>

```python
soap_pass_through_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_api_id_input`<sup>Optional</sup> <a name="source_api_id_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiIdInput"></a>

```python
source_api_id_input: str
```

- *Type:* str

---

##### `subscription_key_parameter_names_input`<sup>Optional</sup> <a name="subscription_key_parameter_names_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionKeyParameterNamesInput"></a>

```python
subscription_key_parameter_names_input: ApiManagementApiSubscriptionKeyParameterNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---

##### `subscription_required_input`<sup>Optional</sup> <a name="subscription_required_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequiredInput"></a>

```python
subscription_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terms_of_service_url_input`<sup>Optional</sup> <a name="terms_of_service_url_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrlInput"></a>

```python
terms_of_service_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementApiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version_set_id_input`<sup>Optional</sup> <a name="version_set_id_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetIdInput"></a>

```python
version_set_id_input: str
```

- *Type:* str

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `revision_description`<sup>Required</sup> <a name="revision_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.revisionDescription"></a>

```python
revision_description: str
```

- *Type:* str

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `soap_pass_through`<sup>Required</sup> <a name="soap_pass_through" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.soapPassThrough"></a>

```python
soap_pass_through: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_api_id`<sup>Required</sup> <a name="source_api_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.sourceApiId"></a>

```python
source_api_id: str
```

- *Type:* str

---

##### `subscription_required`<sup>Required</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.subscriptionRequired"></a>

```python
subscription_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `terms_of_service_url`<sup>Required</sup> <a name="terms_of_service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `version_set_id`<sup>Required</sup> <a name="version_set_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.versionSetId"></a>

```python
version_set_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiConfig <a name="ApiManagementApiConfig" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  name: str,
  resource_group_name: str,
  revision: str,
  api_type: str = None,
  contact: ApiManagementApiContact = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  import: ApiManagementApiImport = None,
  license: ApiManagementApiLicense = None,
  oauth2_authorization: ApiManagementApiOauth2Authorization = None,
  openid_authentication: ApiManagementApiOpenidAuthentication = None,
  path: str = None,
  protocols: typing.List[str] = None,
  revision_description: str = None,
  service_url: str = None,
  soap_pass_through: typing.Union[bool, IResolvable] = None,
  source_api_id: str = None,
  subscription_key_parameter_names: ApiManagementApiSubscriptionKeyParameterNames = None,
  subscription_required: typing.Union[bool, IResolvable] = None,
  terms_of_service_url: str = None,
  timeouts: ApiManagementApiTimeouts = None,
  version: str = None,
  version_description: str = None,
  version_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision">revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision ApiManagementApi#revision}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType">api_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact">contact</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | contact block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#description ApiManagementApi#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#id ApiManagementApi#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license">license</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | license block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization">oauth2_authorization</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | oauth2_authorization block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication">openid_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | openid_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#path ApiManagementApi#path}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription">revision_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl">service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.soapPassThrough">soap_pass_through</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#soap_pass_through ApiManagementApi#soap_pass_through}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId">source_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames">subscription_key_parameter_names</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | subscription_key_parameter_names block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired">subscription_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl">terms_of_service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version ApiManagementApi#version}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription">version_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId">version_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_management_name ApiManagementApi#api_management_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#resource_group_name ApiManagementApi#resource_group_name}.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revision"></a>

```python
revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision ApiManagementApi#revision}.

---

##### `api_type`<sup>Optional</sup> <a name="api_type" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#api_type ApiManagementApi#api_type}.

---

##### `contact`<sup>Optional</sup> <a name="contact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.contact"></a>

```python
contact: ApiManagementApiContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#contact ApiManagementApi#contact}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#description ApiManagementApi#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#display_name ApiManagementApi#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#id ApiManagementApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.import"></a>

```python
import: ApiManagementApiImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#import ApiManagementApi#import}

---

##### `license`<sup>Optional</sup> <a name="license" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.license"></a>

```python
license: ApiManagementApiLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#license ApiManagementApi#license}

---

##### `oauth2_authorization`<sup>Optional</sup> <a name="oauth2_authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.oauth2Authorization"></a>

```python
oauth2_authorization: ApiManagementApiOauth2Authorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

oauth2_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#oauth2_authorization ApiManagementApi#oauth2_authorization}

---

##### `openid_authentication`<sup>Optional</sup> <a name="openid_authentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.openidAuthentication"></a>

```python
openid_authentication: ApiManagementApiOpenidAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

openid_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#openid_authentication ApiManagementApi#openid_authentication}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#path ApiManagementApi#path}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#protocols ApiManagementApi#protocols}.

---

##### `revision_description`<sup>Optional</sup> <a name="revision_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.revisionDescription"></a>

```python
revision_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#revision_description ApiManagementApi#revision_description}.

---

##### `service_url`<sup>Optional</sup> <a name="service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_url ApiManagementApi#service_url}.

---

##### `soap_pass_through`<sup>Optional</sup> <a name="soap_pass_through" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.soapPassThrough"></a>

```python
soap_pass_through: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#soap_pass_through ApiManagementApi#soap_pass_through}.

---

##### `source_api_id`<sup>Optional</sup> <a name="source_api_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.sourceApiId"></a>

```python
source_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#source_api_id ApiManagementApi#source_api_id}.

---

##### `subscription_key_parameter_names`<sup>Optional</sup> <a name="subscription_key_parameter_names" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionKeyParameterNames"></a>

```python
subscription_key_parameter_names: ApiManagementApiSubscriptionKeyParameterNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

subscription_key_parameter_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_key_parameter_names ApiManagementApi#subscription_key_parameter_names}

---

##### `subscription_required`<sup>Optional</sup> <a name="subscription_required" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.subscriptionRequired"></a>

```python
subscription_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#subscription_required ApiManagementApi#subscription_required}.

---

##### `terms_of_service_url`<sup>Optional</sup> <a name="terms_of_service_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.termsOfServiceUrl"></a>

```python
terms_of_service_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#terms_of_service_url ApiManagementApi#terms_of_service_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.timeouts"></a>

```python
timeouts: ApiManagementApiTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#timeouts ApiManagementApi#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version ApiManagementApi#version}.

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_description ApiManagementApi#version_description}.

---

##### `version_set_id`<sup>Optional</sup> <a name="version_set_id" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiConfig.property.versionSetId"></a>

```python
version_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#version_set_id ApiManagementApi#version_set_id}.

---

### ApiManagementApiContact <a name="ApiManagementApiContact" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiContact(
  email: str = None,
  name: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#email ApiManagementApi#email}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#email ApiManagementApi#email}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiImport <a name="ApiManagementApiImport" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiImport(
  content_format: str,
  content_value: str,
  wsdl_selector: ApiManagementApiImportWsdlSelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat">content_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue">content_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector">wsdl_selector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | wsdl_selector block. |

---

##### `content_format`<sup>Required</sup> <a name="content_format" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentFormat"></a>

```python
content_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_format ApiManagementApi#content_format}.

---

##### `content_value`<sup>Required</sup> <a name="content_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.contentValue"></a>

```python
content_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#content_value ApiManagementApi#content_value}.

---

##### `wsdl_selector`<sup>Optional</sup> <a name="wsdl_selector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport.property.wsdlSelector"></a>

```python
wsdl_selector: ApiManagementApiImportWsdlSelector
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

wsdl_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#wsdl_selector ApiManagementApi#wsdl_selector}

---

### ApiManagementApiImportWsdlSelector <a name="ApiManagementApiImportWsdlSelector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiImportWsdlSelector(
  endpoint_name: str,
  service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName">endpoint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}. |

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}.

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}.

---

### ApiManagementApiLicense <a name="ApiManagementApiLicense" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiLicense(
  name: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#name ApiManagementApi#name}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#url ApiManagementApi#url}.

---

### ApiManagementApiOauth2Authorization <a name="ApiManagementApiOauth2Authorization" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiOauth2Authorization(
  authorization_server_name: str,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName">authorization_server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#scope ApiManagementApi#scope}. |

---

##### `authorization_server_name`<sup>Required</sup> <a name="authorization_server_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.authorizationServerName"></a>

```python
authorization_server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#authorization_server_name ApiManagementApi#authorization_server_name}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#scope ApiManagementApi#scope}.

---

### ApiManagementApiOpenidAuthentication <a name="ApiManagementApiOpenidAuthentication" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiOpenidAuthentication(
  openid_provider_name: str,
  bearer_token_sending_methods: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName">openid_provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods">bearer_token_sending_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}. |

---

##### `openid_provider_name`<sup>Required</sup> <a name="openid_provider_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.openidProviderName"></a>

```python
openid_provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#openid_provider_name ApiManagementApi#openid_provider_name}.

---

##### `bearer_token_sending_methods`<sup>Optional</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication.property.bearerTokenSendingMethods"></a>

```python
bearer_token_sending_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#bearer_token_sending_methods ApiManagementApi#bearer_token_sending_methods}.

---

### ApiManagementApiSubscriptionKeyParameterNames <a name="ApiManagementApiSubscriptionKeyParameterNames" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames(
  header: str,
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header">header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#header ApiManagementApi#header}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#query ApiManagementApi#query}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.header"></a>

```python
header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#header ApiManagementApi#header}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#query ApiManagementApi#query}.

---

### ApiManagementApiTimeouts <a name="ApiManagementApiTimeouts" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#create ApiManagementApi#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#delete ApiManagementApi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#read ApiManagementApi#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#update ApiManagementApi#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#create ApiManagementApi#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#delete ApiManagementApi#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#read ApiManagementApi#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#update ApiManagementApi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiContactOutputReference <a name="ApiManagementApiContactOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContactOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiContact
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiContact">ApiManagementApiContact</a>

---


### ApiManagementApiImportOutputReference <a name="ApiManagementApiImportOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiImportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector">put_wsdl_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector">reset_wsdl_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_wsdl_selector` <a name="put_wsdl_selector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector"></a>

```python
def put_wsdl_selector(
  endpoint_name: str,
  service_name: str
) -> None
```

###### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector.parameter.endpointName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#endpoint_name ApiManagementApi#endpoint_name}.

---

###### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.putWsdlSelector.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/api_management_api#service_name ApiManagementApi#service_name}.

---

##### `reset_wsdl_selector` <a name="reset_wsdl_selector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.resetWsdlSelector"></a>

```python
def reset_wsdl_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector">wsdl_selector</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput">content_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput">content_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput">wsdl_selector_input</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat">content_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue">content_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wsdl_selector`<sup>Required</sup> <a name="wsdl_selector" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelector"></a>

```python
wsdl_selector: ApiManagementApiImportWsdlSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference">ApiManagementApiImportWsdlSelectorOutputReference</a>

---

##### `content_format_input`<sup>Optional</sup> <a name="content_format_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormatInput"></a>

```python
content_format_input: str
```

- *Type:* str

---

##### `content_value_input`<sup>Optional</sup> <a name="content_value_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValueInput"></a>

```python
content_value_input: str
```

- *Type:* str

---

##### `wsdl_selector_input`<sup>Optional</sup> <a name="wsdl_selector_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.wsdlSelectorInput"></a>

```python
wsdl_selector_input: ApiManagementApiImportWsdlSelector
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---

##### `content_format`<sup>Required</sup> <a name="content_format" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentFormat"></a>

```python
content_format: str
```

- *Type:* str

---

##### `content_value`<sup>Required</sup> <a name="content_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.contentValue"></a>

```python
content_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiImport
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImport">ApiManagementApiImport</a>

---


### ApiManagementApiImportWsdlSelectorOutputReference <a name="ApiManagementApiImportWsdlSelectorOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput">endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName">endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_name_input`<sup>Optional</sup> <a name="endpoint_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointNameInput"></a>

```python
endpoint_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `endpoint_name`<sup>Required</sup> <a name="endpoint_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.endpointName"></a>

```python
endpoint_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiImportWsdlSelector
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiImportWsdlSelector">ApiManagementApiImportWsdlSelector</a>

---


### ApiManagementApiLicenseOutputReference <a name="ApiManagementApiLicenseOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiLicenseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicenseOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiLicense
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiLicense">ApiManagementApiLicense</a>

---


### ApiManagementApiOauth2AuthorizationOutputReference <a name="ApiManagementApiOauth2AuthorizationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope">reset_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput">authorization_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName">authorization_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_server_name_input`<sup>Optional</sup> <a name="authorization_server_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerNameInput"></a>

```python
authorization_server_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `authorization_server_name`<sup>Required</sup> <a name="authorization_server_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.authorizationServerName"></a>

```python
authorization_server_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2AuthorizationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiOauth2Authorization
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOauth2Authorization">ApiManagementApiOauth2Authorization</a>

---


### ApiManagementApiOpenidAuthenticationOutputReference <a name="ApiManagementApiOpenidAuthenticationOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods">reset_bearer_token_sending_methods</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bearer_token_sending_methods` <a name="reset_bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.resetBearerTokenSendingMethods"></a>

```python
def reset_bearer_token_sending_methods() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput">bearer_token_sending_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput">openid_provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods">bearer_token_sending_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName">openid_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bearer_token_sending_methods_input`<sup>Optional</sup> <a name="bearer_token_sending_methods_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethodsInput"></a>

```python
bearer_token_sending_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `openid_provider_name_input`<sup>Optional</sup> <a name="openid_provider_name_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderNameInput"></a>

```python
openid_provider_name_input: str
```

- *Type:* str

---

##### `bearer_token_sending_methods`<sup>Required</sup> <a name="bearer_token_sending_methods" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.bearerTokenSendingMethods"></a>

```python
bearer_token_sending_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `openid_provider_name`<sup>Required</sup> <a name="openid_provider_name" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.openidProviderName"></a>

```python
openid_provider_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiOpenidAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiOpenidAuthentication">ApiManagementApiOpenidAuthentication</a>

---


### ApiManagementApiSubscriptionKeyParameterNamesOutputReference <a name="ApiManagementApiSubscriptionKeyParameterNamesOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNamesOutputReference.property.internalValue"></a>

```python
internal_value: ApiManagementApiSubscriptionKeyParameterNames
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiSubscriptionKeyParameterNames">ApiManagementApiSubscriptionKeyParameterNames</a>

---


### ApiManagementApiTimeoutsOutputReference <a name="ApiManagementApiTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_api

apiManagementApi.ApiManagementApiTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementApiTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementApi.ApiManagementApiTimeouts">ApiManagementApiTimeouts</a>]

---



