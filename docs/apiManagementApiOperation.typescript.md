# `azurerm_api_management_api_operation`

Refer to the Terraform Registory for docs: [`azurerm_api_management_api_operation`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation).

# `apiManagementApiOperation` Submodule <a name="`apiManagementApiOperation` Submodule" id="@cdktf/provider-azurerm.apiManagementApiOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementApiOperation <a name="ApiManagementApiOperation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation azurerm_api_management_api_operation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperation(scope: Construct, id: string, config: ApiManagementApiOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig">ApiManagementApiOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig">ApiManagementApiOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest">putRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse">putResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter">putTemplateParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse">resetResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter">resetTemplateParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRequest` <a name="putRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest"></a>

```typescript
public putRequest(value: ApiManagementApiOperationRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---

##### `putResponse` <a name="putResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse"></a>

```typescript
public putResponse(value: IResolvable | ApiManagementApiOperationResponse[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putResponse.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]

---

##### `putTemplateParameter` <a name="putTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter"></a>

```typescript
public putTemplateParameter(value: IResolvable | ApiManagementApiOperationTemplateParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTemplateParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementApiOperationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetResponse"></a>

```typescript
public resetResponse(): void
```

##### `resetTemplateParameter` <a name="resetTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTemplateParameter"></a>

```typescript
public resetTemplateParameter(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

apiManagementApiOperation.ApiManagementApiOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response">response</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter">templateParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput">apiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput">apiNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput">operationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput">requestInput</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput">responseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput">templateParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput">urlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName">apiName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId">operationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate">urlTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.request"></a>

```typescript
public readonly request: ApiManagementApiOperationRequestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference">ApiManagementApiOperationRequestOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.response"></a>

```typescript
public readonly response: ApiManagementApiOperationResponseList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList">ApiManagementApiOperationResponseList</a>

---

##### `templateParameter`<sup>Required</sup> <a name="templateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameter"></a>

```typescript
public readonly templateParameter: ApiManagementApiOperationTemplateParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList">ApiManagementApiOperationTemplateParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiOperationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference">ApiManagementApiOperationTimeoutsOutputReference</a>

---

##### `apiManagementNameInput`<sup>Optional</sup> <a name="apiManagementNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementNameInput"></a>

```typescript
public readonly apiManagementNameInput: string;
```

- *Type:* string

---

##### `apiNameInput`<sup>Optional</sup> <a name="apiNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiNameInput"></a>

```typescript
public readonly apiNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationIdInput"></a>

```typescript
public readonly operationIdInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.requestInput"></a>

```typescript
public readonly requestInput: ApiManagementApiOperationRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.responseInput"></a>

```typescript
public readonly responseInput: IResolvable | ApiManagementApiOperationResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]

---

##### `templateParameterInput`<sup>Optional</sup> <a name="templateParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.templateParameterInput"></a>

```typescript
public readonly templateParameterInput: IResolvable | ApiManagementApiOperationTemplateParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementApiOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

---

##### `urlTemplateInput`<sup>Optional</sup> <a name="urlTemplateInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplateInput"></a>

```typescript
public readonly urlTemplateInput: string;
```

- *Type:* string

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.urlTemplate"></a>

```typescript
public readonly urlTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementApiOperationConfig <a name="ApiManagementApiOperationConfig" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationConfig: apiManagementApiOperation.ApiManagementApiOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName">apiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName">apiName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId">operationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate">urlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request">request</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | request block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response">response</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]</code> | response block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter">templateParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]</code> | template_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementName`<sup>Required</sup> <a name="apiManagementName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiManagementName"></a>

```typescript
public readonly apiManagementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#api_management_name ApiManagementApiOperation#api_management_name}.

---

##### `apiName`<sup>Required</sup> <a name="apiName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#api_name ApiManagementApiOperation#api_name}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#display_name ApiManagementApiOperation#display_name}.

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#method ApiManagementApiOperation#method}.

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.operationId"></a>

```typescript
public readonly operationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#operation_id ApiManagementApiOperation#operation_id}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#resource_group_name ApiManagementApiOperation#resource_group_name}.

---

##### `urlTemplate`<sup>Required</sup> <a name="urlTemplate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.urlTemplate"></a>

```typescript
public readonly urlTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#url_template ApiManagementApiOperation#url_template}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#id ApiManagementApiOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.request"></a>

```typescript
public readonly request: ApiManagementApiOperationRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#request ApiManagementApiOperation#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.response"></a>

```typescript
public readonly response: IResolvable | ApiManagementApiOperationResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]

response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#response ApiManagementApiOperation#response}

---

##### `templateParameter`<sup>Optional</sup> <a name="templateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.templateParameter"></a>

```typescript
public readonly templateParameter: IResolvable | ApiManagementApiOperationTemplateParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]

template_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#template_parameter ApiManagementApiOperation#template_parameter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementApiOperationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#timeouts ApiManagementApiOperation#timeouts}

---

### ApiManagementApiOperationRequest <a name="ApiManagementApiOperationRequest" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequest: apiManagementApiOperation.ApiManagementApiOperationRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter">queryParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]</code> | query_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation">representation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]</code> | representation block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.header"></a>

```typescript
public readonly header: IResolvable | ApiManagementApiOperationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `queryParameter`<sup>Optional</sup> <a name="queryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.queryParameter"></a>

```typescript
public readonly queryParameter: IResolvable | ApiManagementApiOperationRequestQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#query_parameter ApiManagementApiOperation#query_parameter}

---

##### `representation`<sup>Optional</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest.property.representation"></a>

```typescript
public readonly representation: IResolvable | ApiManagementApiOperationRequestRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationRequestHeader <a name="ApiManagementApiOperationRequestHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestHeader: apiManagementApiOperation.ApiManagementApiOperationRequestHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationRequestHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestHeaderExample <a name="ApiManagementApiOperationRequestHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestHeaderExample: apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestQueryParameter <a name="ApiManagementApiOperationRequestQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestQueryParameter: apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationRequestQueryParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestQueryParameterExample <a name="ApiManagementApiOperationRequestQueryParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestQueryParameterExample: apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentation <a name="ApiManagementApiOperationRequestRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestRepresentation: apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter">formParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationRequestRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `formParameter`<sup>Optional</sup> <a name="formParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.formParameter"></a>

```typescript
public readonly formParameter: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationRequestRepresentationExample <a name="ApiManagementApiOperationRequestRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestRepresentationExample: apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationRequestRepresentationFormParameter <a name="ApiManagementApiOperationRequestRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestRepresentationFormParameter: apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationRequestRepresentationFormParameterExample <a name="ApiManagementApiOperationRequestRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationRequestRepresentationFormParameterExample: apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponse <a name="ApiManagementApiOperationResponse" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponse: apiManagementApiOperation.ApiManagementApiOperationResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode">statusCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation">representation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]</code> | representation block. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#status_code ApiManagementApiOperation#status_code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.header"></a>

```typescript
public readonly header: IResolvable | ApiManagementApiOperationResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#header ApiManagementApiOperation#header}

---

##### `representation`<sup>Optional</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse.property.representation"></a>

```typescript
public readonly representation: IResolvable | ApiManagementApiOperationResponseRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]

representation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#representation ApiManagementApiOperation#representation}

---

### ApiManagementApiOperationResponseHeader <a name="ApiManagementApiOperationResponseHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseHeader: apiManagementApiOperation.ApiManagementApiOperationResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationResponseHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseHeaderExample <a name="ApiManagementApiOperationResponseHeaderExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseHeaderExample: apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentation <a name="ApiManagementApiOperationResponseRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseRepresentation: apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter">formParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]</code> | form_parameter block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#content_type ApiManagementApiOperation#content_type}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationResponseRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `formParameter`<sup>Optional</sup> <a name="formParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.formParameter"></a>

```typescript
public readonly formParameter: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]

form_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#form_parameter ApiManagementApiOperation#form_parameter}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

### ApiManagementApiOperationResponseRepresentationExample <a name="ApiManagementApiOperationResponseRepresentationExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseRepresentationExample: apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationResponseRepresentationFormParameter <a name="ApiManagementApiOperationResponseRepresentationFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseRepresentationFormParameter: apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationResponseRepresentationFormParameterExample <a name="ApiManagementApiOperationResponseRepresentationFormParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationResponseRepresentationFormParameterExample: apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTemplateParameter <a name="ApiManagementApiOperationTemplateParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationTemplateParameter: apiManagementApiOperation.ApiManagementApiOperationTemplateParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example">example</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]</code> | example block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId">schemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName">typeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#required ApiManagementApiOperation#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type ApiManagementApiOperation#type}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#default_value ApiManagementApiOperation#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `example`<sup>Optional</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.example"></a>

```typescript
public readonly example: IResolvable | ApiManagementApiOperationTemplateParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]

example block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#example ApiManagementApiOperation#example}

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#schema_id ApiManagementApiOperation#schema_id}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#type_name ApiManagementApiOperation#type_name}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#values ApiManagementApiOperation#values}.

---

### ApiManagementApiOperationTemplateParameterExample <a name="ApiManagementApiOperationTemplateParameterExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationTemplateParameterExample: apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue">externalValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary">summary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#name ApiManagementApiOperation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#description ApiManagementApiOperation#description}.

---

##### `externalValue`<sup>Optional</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#external_value ApiManagementApiOperation#external_value}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#summary ApiManagementApiOperation#summary}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#value ApiManagementApiOperation#value}.

---

### ApiManagementApiOperationTimeouts <a name="ApiManagementApiOperationTimeouts" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

const apiManagementApiOperationTimeouts: apiManagementApiOperation.ApiManagementApiOperationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#create ApiManagementApiOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#delete ApiManagementApiOperation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#read ApiManagementApiOperation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/api_management_api_operation#update ApiManagementApiOperation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementApiOperationRequestHeaderExampleList <a name="ApiManagementApiOperationRequestHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]

---


### ApiManagementApiOperationRequestHeaderExampleOutputReference <a name="ApiManagementApiOperationRequestHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestHeaderExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>

---


### ApiManagementApiOperationRequestHeaderList <a name="ApiManagementApiOperationRequestHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]

---


### ApiManagementApiOperationRequestHeaderOutputReference <a name="ApiManagementApiOperationRequestHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationRequestHeaderExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationRequestHeaderExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExampleList">ApiManagementApiOperationRequestHeaderExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationRequestHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderExample">ApiManagementApiOperationRequestHeaderExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>

---


### ApiManagementApiOperationRequestOutputReference <a name="ApiManagementApiOperationRequestOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter">putQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation">putRepresentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter">resetQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation">resetRepresentation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ApiManagementApiOperationRequestHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]

---

##### `putQueryParameter` <a name="putQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter"></a>

```typescript
public putQueryParameter(value: IResolvable | ApiManagementApiOperationRequestQueryParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putQueryParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]

---

##### `putRepresentation` <a name="putRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation"></a>

```typescript
public putRepresentation(value: IResolvable | ApiManagementApiOperationRequestRepresentation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.putRepresentation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetQueryParameter` <a name="resetQueryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetQueryParameter"></a>

```typescript
public resetQueryParameter(): void
```

##### `resetRepresentation` <a name="resetRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.resetRepresentation"></a>

```typescript
public resetRepresentation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter">queryParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation">representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput">queryParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput">representationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.header"></a>

```typescript
public readonly header: ApiManagementApiOperationRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeaderList">ApiManagementApiOperationRequestHeaderList</a>

---

##### `queryParameter`<sup>Required</sup> <a name="queryParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameter"></a>

```typescript
public readonly queryParameter: ApiManagementApiOperationRequestQueryParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList">ApiManagementApiOperationRequestQueryParameterList</a>

---

##### `representation`<sup>Required</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representation"></a>

```typescript
public readonly representation: ApiManagementApiOperationRequestRepresentationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList">ApiManagementApiOperationRequestRepresentationList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ApiManagementApiOperationRequestHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestHeader">ApiManagementApiOperationRequestHeader</a>[]

---

##### `queryParameterInput`<sup>Optional</sup> <a name="queryParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.queryParameterInput"></a>

```typescript
public readonly queryParameterInput: IResolvable | ApiManagementApiOperationRequestQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]

---

##### `representationInput`<sup>Optional</sup> <a name="representationInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.representationInput"></a>

```typescript
public readonly representationInput: IResolvable | ApiManagementApiOperationRequestRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementApiOperationRequest;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequest">ApiManagementApiOperationRequest</a>

---


### ApiManagementApiOperationRequestQueryParameterExampleList <a name="ApiManagementApiOperationRequestQueryParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestQueryParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestQueryParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]

---


### ApiManagementApiOperationRequestQueryParameterExampleOutputReference <a name="ApiManagementApiOperationRequestQueryParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestQueryParameterExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>

---


### ApiManagementApiOperationRequestQueryParameterList <a name="ApiManagementApiOperationRequestQueryParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestQueryParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestQueryParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>[]

---


### ApiManagementApiOperationRequestQueryParameterOutputReference <a name="ApiManagementApiOperationRequestQueryParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationRequestQueryParameterExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationRequestQueryParameterExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExampleList">ApiManagementApiOperationRequestQueryParameterExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationRequestQueryParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterExample">ApiManagementApiOperationRequestQueryParameterExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestQueryParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestQueryParameter">ApiManagementApiOperationRequestQueryParameter</a>

---


### ApiManagementApiOperationRequestRepresentationExampleList <a name="ApiManagementApiOperationRequestRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]

---


### ApiManagementApiOperationRequestRepresentationExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleList <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]

---


### ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameterExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>

---


### ApiManagementApiOperationRequestRepresentationFormParameterList <a name="ApiManagementApiOperationRequestRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]

---


### ApiManagementApiOperationRequestRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationRequestRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameterExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationRequestRepresentationFormParameterExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExampleList">ApiManagementApiOperationRequestRepresentationFormParameterExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterExample">ApiManagementApiOperationRequestRepresentationFormParameterExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>

---


### ApiManagementApiOperationRequestRepresentationList <a name="ApiManagementApiOperationRequestRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationRequestRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>[]

---


### ApiManagementApiOperationRequestRepresentationOutputReference <a name="ApiManagementApiOperationRequestRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter">putFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter">resetFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationRequestRepresentationExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]

---

##### `putFormParameter` <a name="putFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter"></a>

```typescript
public putFormParameter(value: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]

---

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetFormParameter` <a name="resetFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetFormParameter"></a>

```typescript
public resetFormParameter(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter">formParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput">formParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationRequestRepresentationExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExampleList">ApiManagementApiOperationRequestRepresentationExampleList</a>

---

##### `formParameter`<sup>Required</sup> <a name="formParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameter"></a>

```typescript
public readonly formParameter: ApiManagementApiOperationRequestRepresentationFormParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameterList">ApiManagementApiOperationRequestRepresentationFormParameterList</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationRequestRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationExample">ApiManagementApiOperationRequestRepresentationExample</a>[]

---

##### `formParameterInput`<sup>Optional</sup> <a name="formParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.formParameterInput"></a>

```typescript
public readonly formParameterInput: IResolvable | ApiManagementApiOperationRequestRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationFormParameter">ApiManagementApiOperationRequestRepresentationFormParameter</a>[]

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationRequestRepresentation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationRequestRepresentation">ApiManagementApiOperationRequestRepresentation</a>

---


### ApiManagementApiOperationResponseHeaderExampleList <a name="ApiManagementApiOperationResponseHeaderExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseHeaderExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]

---


### ApiManagementApiOperationResponseHeaderExampleOutputReference <a name="ApiManagementApiOperationResponseHeaderExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseHeaderExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>

---


### ApiManagementApiOperationResponseHeaderList <a name="ApiManagementApiOperationResponseHeaderList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]

---


### ApiManagementApiOperationResponseHeaderOutputReference <a name="ApiManagementApiOperationResponseHeaderOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationResponseHeaderExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationResponseHeaderExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExampleList">ApiManagementApiOperationResponseHeaderExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationResponseHeaderExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderExample">ApiManagementApiOperationResponseHeaderExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>

---


### ApiManagementApiOperationResponseList <a name="ApiManagementApiOperationResponseList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponse[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>[]

---


### ApiManagementApiOperationResponseOutputReference <a name="ApiManagementApiOperationResponseOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation">putRepresentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation">resetRepresentation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | ApiManagementApiOperationResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]

---

##### `putRepresentation` <a name="putRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation"></a>

```typescript
public putRepresentation(value: IResolvable | ApiManagementApiOperationResponseRepresentation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.putRepresentation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetRepresentation` <a name="resetRepresentation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.resetRepresentation"></a>

```typescript
public resetRepresentation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation">representation</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput">representationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.header"></a>

```typescript
public readonly header: ApiManagementApiOperationResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeaderList">ApiManagementApiOperationResponseHeaderList</a>

---

##### `representation`<sup>Required</sup> <a name="representation" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representation"></a>

```typescript
public readonly representation: ApiManagementApiOperationResponseRepresentationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList">ApiManagementApiOperationResponseRepresentationList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | ApiManagementApiOperationResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseHeader">ApiManagementApiOperationResponseHeader</a>[]

---

##### `representationInput`<sup>Optional</sup> <a name="representationInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.representationInput"></a>

```typescript
public readonly representationInput: IResolvable | ApiManagementApiOperationResponseRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponse;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponse">ApiManagementApiOperationResponse</a>

---


### ApiManagementApiOperationResponseRepresentationExampleList <a name="ApiManagementApiOperationResponseRepresentationExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseRepresentationExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]

---


### ApiManagementApiOperationResponseRepresentationExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleList <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]

---


### ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameterExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>

---


### ApiManagementApiOperationResponseRepresentationFormParameterList <a name="ApiManagementApiOperationResponseRepresentationFormParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseRepresentationFormParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]

---


### ApiManagementApiOperationResponseRepresentationFormParameterOutputReference <a name="ApiManagementApiOperationResponseRepresentationFormParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameterExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationResponseRepresentationFormParameterExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExampleList">ApiManagementApiOperationResponseRepresentationFormParameterExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterExample">ApiManagementApiOperationResponseRepresentationFormParameterExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>

---


### ApiManagementApiOperationResponseRepresentationList <a name="ApiManagementApiOperationResponseRepresentationList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationResponseRepresentationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>[]

---


### ApiManagementApiOperationResponseRepresentationOutputReference <a name="ApiManagementApiOperationResponseRepresentationOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter">putFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter">resetFormParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationResponseRepresentationExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]

---

##### `putFormParameter` <a name="putFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter"></a>

```typescript
public putFormParameter(value: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.putFormParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]

---

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetFormParameter` <a name="resetFormParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetFormParameter"></a>

```typescript
public resetFormParameter(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter">formParameter</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput">formParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationResponseRepresentationExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExampleList">ApiManagementApiOperationResponseRepresentationExampleList</a>

---

##### `formParameter`<sup>Required</sup> <a name="formParameter" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameter"></a>

```typescript
public readonly formParameter: ApiManagementApiOperationResponseRepresentationFormParameterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameterList">ApiManagementApiOperationResponseRepresentationFormParameterList</a>

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationResponseRepresentationExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationExample">ApiManagementApiOperationResponseRepresentationExample</a>[]

---

##### `formParameterInput`<sup>Optional</sup> <a name="formParameterInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.formParameterInput"></a>

```typescript
public readonly formParameterInput: IResolvable | ApiManagementApiOperationResponseRepresentationFormParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationFormParameter">ApiManagementApiOperationResponseRepresentationFormParameter</a>[]

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationResponseRepresentation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationResponseRepresentation">ApiManagementApiOperationResponseRepresentation</a>

---


### ApiManagementApiOperationTemplateParameterExampleList <a name="ApiManagementApiOperationTemplateParameterExampleList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationTemplateParameterExampleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationTemplateParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]

---


### ApiManagementApiOperationTemplateParameterExampleOutputReference <a name="ApiManagementApiOperationTemplateParameterExampleOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue">resetExternalValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternalValue` <a name="resetExternalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetExternalValue"></a>

```typescript
public resetExternalValue(): void
```

##### `resetSummary` <a name="resetSummary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetSummary"></a>

```typescript
public resetSummary(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput">externalValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput">summaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue">externalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalValueInput`<sup>Optional</sup> <a name="externalValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValueInput"></a>

```typescript
public readonly externalValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summaryInput"></a>

```typescript
public readonly summaryInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalValue`<sup>Required</sup> <a name="externalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.externalValue"></a>

```typescript
public readonly externalValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationTemplateParameterExample;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>

---


### ApiManagementApiOperationTemplateParameterList <a name="ApiManagementApiOperationTemplateParameterList" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get"></a>

```typescript
public get(index: number): ApiManagementApiOperationTemplateParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationTemplateParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>[]

---


### ApiManagementApiOperationTemplateParameterOutputReference <a name="ApiManagementApiOperationTemplateParameterOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample">putExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample">resetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExample` <a name="putExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample"></a>

```typescript
public putExample(value: IResolvable | ApiManagementApiOperationTemplateParameterExample[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.putExample.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExample` <a name="resetExample" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetExample"></a>

```typescript
public resetExample(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetTypeName"></a>

```typescript
public resetTypeName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example">example</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput">exampleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId">schemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `example`<sup>Required</sup> <a name="example" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.example"></a>

```typescript
public readonly example: ApiManagementApiOperationTemplateParameterExampleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExampleList">ApiManagementApiOperationTemplateParameterExampleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exampleInput`<sup>Optional</sup> <a name="exampleInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.exampleInput"></a>

```typescript
public readonly exampleInput: IResolvable | ApiManagementApiOperationTemplateParameterExample[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterExample">ApiManagementApiOperationTemplateParameterExample</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeNameInput"></a>

```typescript
public readonly typeNameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationTemplateParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTemplateParameter">ApiManagementApiOperationTemplateParameter</a>

---


### ApiManagementApiOperationTimeoutsOutputReference <a name="ApiManagementApiOperationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementApiOperation } from '@cdktf/provider-azurerm'

new apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementApiOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementApiOperation.ApiManagementApiOperationTimeouts">ApiManagementApiOperationTimeouts</a>

---



