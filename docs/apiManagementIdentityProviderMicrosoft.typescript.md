# `azurerm_api_management_identity_provider_microsoft`

Refer to the Terraform Registory for docs: [`azurerm_api_management_identity_provider_microsoft`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft).

# `apiManagementIdentityProviderMicrosoft` Submodule <a name="`apiManagementIdentityProviderMicrosoft` Submodule" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementIdentityProviderMicrosoft <a name="ApiManagementIdentityProviderMicrosoft" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft azurerm_api_management_identity_provider_microsoft}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft(scope: Construct, id: string, config: ApiManagementIdentityProviderMicrosoftConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig">ApiManagementIdentityProviderMicrosoftConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig">ApiManagementIdentityProviderMicrosoftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementIdentityProviderMicrosoftTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isConstruct"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformElement"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformResource"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference">ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference">ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ApiManagementIdentityProviderMicrosoftTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a> | cdktf.IResolvable

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoft.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementIdentityProviderMicrosoftConfig <a name="ApiManagementIdentityProviderMicrosoftConfig" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.Initializer"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderMicrosoftConfig: apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#api_management_name ApiManagementIdentityProviderMicrosoft#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#client_id ApiManagementIdentityProviderMicrosoft#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#client_secret ApiManagementIdentityProviderMicrosoft#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#resource_group_name ApiManagementIdentityProviderMicrosoft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#id ApiManagementIdentityProviderMicrosoft#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#api_management_name ApiManagementIdentityProviderMicrosoft#api_management_name}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#client_id ApiManagementIdentityProviderMicrosoft#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#client_secret ApiManagementIdentityProviderMicrosoft#client_secret}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#resource_group_name ApiManagementIdentityProviderMicrosoft#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#id ApiManagementIdentityProviderMicrosoft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementIdentityProviderMicrosoftTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#timeouts ApiManagementIdentityProviderMicrosoft#timeouts}

---

### ApiManagementIdentityProviderMicrosoftTimeouts <a name="ApiManagementIdentityProviderMicrosoftTimeouts" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.Initializer"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

const apiManagementIdentityProviderMicrosoftTimeouts: apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#create ApiManagementIdentityProviderMicrosoft#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#delete ApiManagementIdentityProviderMicrosoft#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#read ApiManagementIdentityProviderMicrosoft#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#update ApiManagementIdentityProviderMicrosoft#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#create ApiManagementIdentityProviderMicrosoft#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#delete ApiManagementIdentityProviderMicrosoft#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#read ApiManagementIdentityProviderMicrosoft#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_identity_provider_microsoft#update ApiManagementIdentityProviderMicrosoft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference <a name="ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementIdentityProviderMicrosoft } from '@cdktf/provider-azurerm'

new apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementIdentityProviderMicrosoftTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementIdentityProviderMicrosoft.ApiManagementIdentityProviderMicrosoftTimeouts">ApiManagementIdentityProviderMicrosoftTimeouts</a> | cdktf.IResolvable

---



